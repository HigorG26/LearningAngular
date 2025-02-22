import { Component, OnInit } from '@angular/core';
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

  username: string = '';
  currentMessage: string = '';
  inputValue: string = '';
  messages: Message[] = [];
  placeholders: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(name => {
      this.username = name || 'Visitante';
      this.updatePlaceholders();
    });
  }

  private updatePlaceholders(): void {
    this.placeholders = this.messages.length === 0 
      ? generatePlaceholders(this.username)
      : defaultPlaceholder;
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

  getRandomPlaceholder(): string {
    const randomIndex = Math.floor(Math.random() * this.placeholders.length);
    return this.placeholders[randomIndex];
  }
}
