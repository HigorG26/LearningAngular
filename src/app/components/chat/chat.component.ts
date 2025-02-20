import { Component } from '@angular/core';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];
  currentMessage: string = '';
  examples = this.getRandomExamples(4);

  private allExamples = [
    "Explain the concept of object-oriented programming",
    "How to create a REST API with Node.js?",
    "What are the best practices in Angular?",
    "Help me with TypeScript Generics",
    "When did Napoleon Bonaparte die?",
    "When was Brazil's independence?",
    "What are design patterns and what are they for?",
    "How does state management work in React?",
    "What are the differences between SQL and NoSQL?",
    "What is dependency injection in Angular?",
    "How does the Event Loop work in JavaScript?",
    "What are WebSockets and how to use them?",
    "What is the difference between microservices and monoliths?",
    "How to optimize SQL queries for better performance?",
    "What is an ORM and what are the advantages of using it?"
  ];

  private getRandomExamples(count: number): string[] {
    return [...this.allExamples]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }

  setInputValue(example: string): void {
    this.currentMessage = example;
  }

  sendMessage(): void {
    if (this.currentMessage.trim()) {
      this.messages.push({
        text: this.currentMessage,
        isUser: true,
        timestamp: new Date()
      });
      this.currentMessage = '';
      this.examples = this.getRandomExamples(4);
    }
  }
}
