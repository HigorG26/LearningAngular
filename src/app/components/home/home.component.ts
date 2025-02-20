import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

interface Message {
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  username: string = '';
  currentMessage: string = '';
  inputValue: string = '';
  messages: Message[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(name => this.username = name);
  }

  sendMessage() {
    const messageToSend = this.inputValue || this.currentMessage;
    if (messageToSend.trim()) {
      this.messages.push({
        text: messageToSend,
        timestamp: new Date()
      });
      this.inputValue = '';
      this.currentMessage = '';
    }
  }
  
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
    "What is an ORM and what are the advantages of using it?",
    "How to configure JWT authentication in an API?",
    "Who was Julius Caesar and what was his impact on history?",
    "When did the Berlin Wall fall?",
    "What were the causes of the French Revolution?",
    "What was the Cold War and how did it end?",
    "Who invented electricity?",
    "What was the first civilization in history?",
    "How did the internet emerge?",
    "Who was Leonardo da Vinci and what were his main inventions?",
    "What are neural networks and how do they work?",
    "What are the applications of quantum computing?",
    "How does artificial intelligence work?",
    "What is the theory of relativity?",
    "How does nuclear fusion work?",
    "What are black holes and how do they form?",
    "What are particle accelerators?",
    "How does nuclear energy work?",
    "What is technological singularity?",
    "How do self-driving cars make decisions?",
    "What is nanotechnology and what are its applications?",
    "How does 3D printing work?",
    "What are cryptocurrencies and how do they work?",
    "What is blockchain beyond Bitcoin?",
    "How do satellites stay in orbit?",
    "What are the main ongoing space missions?",
    "How does species evolution work?",
    "What are climate phenomena like El Niño and La Niña?",
    "How do hurricanes form?",
    "What is the greenhouse effect and how does it impact the climate?",
    "How does the human immune system work?",
    "What are stem cells and why are they important?",
    "How does the human brain process information?",
    "What are antibiotics and how do they work?",
    "What are the physical states of matter beyond the traditional ones?",
    "What was the Industrial Revolution?",
    "How did the Russian Revolution happen?",
    "Why did World War I start?",
    "Who was Genghis Khan?",
    "How did the Roman Empire fall?",
    "What was the Black Death and how did it impact Europe?",
    "What was the largest empire in history?",
    "What were the reasons for the Vietnam War?",
    "What caused the Great Depression of 1929?",
    "Who were the Vikings and how far did they travel?",
    "What are closures in JavaScript?",
    "How does the Garbage Collector work in Java?",
    "What are the differences between HTTP and HTTPS?",
    "What is a Webhook and how to use it?",
    "What are the main encryption methods?",
    "What are Promises and Async/Await in JavaScript?",
    "How does semantic versioning (SemVer) work?",
    "What are the advantages and disadvantages of GraphQL?",
    "What is a Container and how does Docker work?",
    "How to improve website performance?",
    "What is SSR (Server-Side Rendering) and SSG (Static Site Generation)?"
];



  examples = this.getRandomExamples(4);

  setInputValue(example: string): void {
    this.inputValue = example;
  }

  private getRandomExamples(count: number): string[] {
    return [...this.allExamples]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }
}
