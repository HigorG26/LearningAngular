import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username = new BehaviorSubject<string>('');
  currentUser = this.username.asObservable();

  setUsername(name: string) {
    this.username.next(name);
  }
}