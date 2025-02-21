import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  onSubmit() {
    if (this.username.trim()) {
      this.userService.setUsername(this.username);
      localStorage.setItem('username', this.username);
      this.router.navigate(['/home']);
    }
  }
} 
