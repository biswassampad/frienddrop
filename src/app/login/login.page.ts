import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string=""
  password:string=""
  constructor(

    public toastController: ToastController,
    private storage: Storage,
    public UserService:UserService,
    private router : Router,
  ) { }

  ngOnInit() {

  }
  async login(){
    
  }
async Logintoast(){
  const toast = await this.toastController.create({
    message: 'Login Successfull',
    duration: 2000,
    color:'dark'
  });
     await this.router.navigate(['/home'])
  toast.present();
}
}
