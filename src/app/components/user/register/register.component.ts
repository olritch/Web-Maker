import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    username: string;
    password: string;
    verifyPassword: string;

  constructor() { }

  ngOnInit() {}

  register () {
    console.log(this.username);
    console.log(this.password);
    console.log(this.verifyPassword);
  }
}
