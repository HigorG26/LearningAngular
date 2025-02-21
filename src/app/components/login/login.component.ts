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

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    const nome = sessionStorage.getItem('nome');
    if (nome) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    if (this.username.trim()) {
      this.userService.setUsername(this.username);
      localStorage.setItem('username', this.username);
      this.router.navigate(['/home']);
    }
  }

  onLogin() {
    // após validar o login
    sessionStorage.setItem('nome', 'usuario'); // substitua 'usuario' pelo nome real
    this.router.navigate(['/home']);
  }
} 
