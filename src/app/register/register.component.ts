import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {User} from './test'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserList: Array<User> = [];
  constructor(  private formbuilder: FormBuilder) { }
  form = new FormGroup({
    firstName: new FormControl(),
    password: new FormControl(),
    password2: new FormControl()
  });
  ngOnChanges() {
    this.formRebuild();
  }


  formRebuild() {
    this.form.reset({
      website: ''
    });
  }

  // });
  ngOnInit() {
  }
  addUser(){
    console.log('hey', this.form.value);
    var check = this.form.value.password.toString();
    var check2 = this.form.value.password.toString();
    if(check != check2) {
      alert('กรุณากรอกให้ตรงกันด้วย');
      return null;
    } else {
      let userObj = new User();
      userObj.name = "something";
      userObj.password = '12';
    }
  }
}
