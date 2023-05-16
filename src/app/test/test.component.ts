import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  registered = false;
  defaultRank = "2";
  form = {
    email: '',
    rank: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(this.registerForm);
    this.registered = true;

    this.form.email = this.registerForm.value.email;
    this.form.password = this.registerForm.value.password;
    this.form.rank = this.registerForm.value.rank;

    this.registerForm.reset();
  }

}
