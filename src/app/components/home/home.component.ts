import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { techExamples } from '../../data/examples/tech-examples';
import { scienceExamples } from '../../data/examples/science-examples';
import { historyExamples } from '../../data/examples/history-examples';
import { generatePlaceholders, defaultPlaceholder } from '../../data/placeholders/chat-placeholders';

interface Message {
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  username: string = sessionStorage.getItem('username') || '';
  currentMessage: string = '';
  inputValue: string = '';
  messages: Message[] = [];
  placeholders: string[] = [];
  currentPlaceholder: string = '';
  isInputInvalid: boolean = false;

  constructor(private userService: UserService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    const storedUsername = sessionStorage.getItem('username');
    this.username = storedUsername || 'Visitante';
    this.updatePlaceholders();
    this.updateCurrentPlaceholder();
    
    this.userService.currentUser.subscribe(name => {
      if (name) {
        this.username = name;
        this.updatePlaceholders();
        this.updateCurrentPlaceholder();
      }
    });

    setTimeout(() => {
      this.changeDetector.detectChanges();
    }, 0);
  }

  private updatePlaceholders(): void {
    this.placeholders = this.messages.length === 0 
      ? generatePlaceholders(this.username)
      : defaultPlaceholder;
  }

  private updateCurrentPlaceholder(): void {
    const randomIndex = Math.floor(Math.random() * this.placeholders.length);
    if (this.messages.length > 0) {
      this.currentPlaceholder = defaultPlaceholder[0];
    } else {
      this.currentPlaceholder = this.placeholders[randomIndex];
    }
  }

  checkMessage(message: string): boolean {
    if (!this.username || this.username.trim() === '') {
      this.isInputInvalid = true;
      return false;
    }
    
    if (!message || message.trim() === '') {
      this.isInputInvalid = true;
      return false;
    }
    
    this.isInputInvalid = false;
    return true;
  }

  sendMessage() {
    if (this.inputValue.trim()) {
      this.messages.push({
        text: this.inputValue,
        timestamp: new Date()
      });
      this.inputValue = '';
      
      // Resetar altura do textarea
      const textarea = document.getElementById('message-input') as HTMLTextAreaElement;
      if (textarea) {
        textarea.style.height = '48px'; // altura mínima definida em min-h-[48px]
      }
    }
  }

  clearMessages() {
    this.messages = [];
    this.updatePlaceholders();
  }
  
  private allExamples = [...techExamples, ...scienceExamples, ...historyExamples];

  examples = this.getRandomExamples(4);

  setInputValue(example: string): void {
    this.inputValue = example;
  }

  private getRandomExamples(count: number): string[] {
    return [...this.allExamples]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();
  }

  autoGrow(event: any): void {
    const element = event.target;
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
    
    // Adiciona overflow-y-auto apenas quando necessário
    if (element.scrollHeight > 128) { // 128px = max-h-32
      element.classList.add('overflow-y-auto');
      element.classList.remove('overflow-y-hidden');
    } else {
      element.classList.add('overflow-y-hidden');
      element.classList.remove('overflow-y-auto');
    }
  }
}
