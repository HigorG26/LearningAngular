import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username = new BehaviorSubject<string>('');
  currentUser = this.username.asObservable();
  private userID = new BehaviorSubject<number>(0);
  private messages = new BehaviorSubject<string>('');

  constructor() {
    // Recupera o username do localStorage quando o serviço é inicializado
    this.username.next(sessionStorage.getItem('username') || '');
  }

  getMessages() {
    return this.messages.getValue();
  }
  
  setUsername(username: string) {
    this.username.next(username);
    localStorage.setItem('username', username);
  }

  setUserID(id: number) {
    this.userID.next(id);
  }

  getUserID() {
    return this.userID.getValue();
  }

  getUserName() {
    return this.username.getValue();
  }

  clearUsername() {
    this.username.next('');
    localStorage.removeItem('username');
  }
}