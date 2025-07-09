import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../../services_/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup= new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  newUser:  {
    identifier: string;
    password: string;
  } = {
    identifier:this.loginForm.controls['username'].value,
    password: this.loginForm.controls['password'].value
  }
      
  router:Router=inject(Router);

  constructor(private loginService: LoginService ) {}

  LogIn() {
    this.loginService.getLogIn(this.newUser).subscribe((response) => {
      localStorage.setItem("token", response.jwt)
      localStorage.setItem("userID",response.user.id.toString())
      this.router.navigate(['/list']);
    });
  }




}
