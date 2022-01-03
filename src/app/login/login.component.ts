import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isActive = true;
  showErrors!: boolean;
  log = false;
  notCorrect = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // checking the login and password with the given ones login data on the server and validation inputs
  login() {
    this.log = true;

    const formValue = this.loginForm.getRawValue();
    if (
      formValue.username == this.service.loginData.username &&
      formValue.password == this.service.loginData.password
    ) {
      this.router.navigateByUrl('/home');
    } else if (this.loginForm.valid) {
      this.notCorrect = true;
    }
  }
}
