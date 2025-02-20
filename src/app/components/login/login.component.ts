import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interface/UserReq';
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
      this.router.navigate(['/home']);
    }
  
  
  // user: User = {
  //   name: ''
  // };
  // showPopup: boolean = true;

  // constructor(private router: Router) {}

  // ngOnInit() {
  //   this.openWelcomePopup();
  // }

  // openWelcomePopup(): void {
  //   this.showPopup = true;
  // }

  // submitName(): void {
  //   if (this.user.name.trim()) {
  //     this.showPopup = false;
  //     localStorage.setItem('userName', this.user.name);
  //     this.router.navigate(['/home']);
  //   }
  // }
  }
} 
