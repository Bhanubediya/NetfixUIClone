import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private fb: FormBuilder, private Route: Router) {}

  ngOnInit(): void {}
alert(){
  window.alert('')
}
  loginDetails = this.fb.group({
    email: [''],
    password: [''],
  });
  onSubmit() {
    var email = this.loginDetails.get('email')?.value;
    var password = this.loginDetails.get('password')?.value;
    if (email != '' && password != '') {
      this.Route.navigateByUrl('/home');
    }
    else if (email === '' || password === '') {
      window.alert('kindly enter somrthing in input field.')
    }
  }
}
