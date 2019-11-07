import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:string=""
  password:string=""
  confirmpassword:string=""
  constructor( public UserService:UserService,private router:Router) { }

  ngOnInit() {
  }
  async signup(){
   
  }

}
