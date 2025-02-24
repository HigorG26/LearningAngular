import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  isInputInvalid: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    const username = sessionStorage.getItem('username');
    if (username) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    if (!this.username || this.username.trim() === '') {
      this.isInputInvalid = true;
      return;
    }
    this.isInputInvalid = false;
    try {
      this.userService.setUsername(this.username);
      sessionStorage.setItem('username', this.username);
      console.log('Username salvo:', sessionStorage.getItem('username'));
      this.router.navigate(['/home'])
      ;
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  }

  onLogin() {
    sessionStorage.setItem('username', this.userService.getUserName());
    this.router.navigate(['/home']);
  }
} 
