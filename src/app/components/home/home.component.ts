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

  sendMessage() {
    const messageToSend = this.inputValue || this.currentMessage;
    if (messageToSend.trim() && messageToSend.length > 0) {
      this.messages.push({
        text: messageToSend,
        timestamp: new Date()
      });
      this.inputValue = '';
      this.currentMessage = '';
      this.updatePlaceholders();
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
}
