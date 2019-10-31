import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
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
    public afAuth:AngularFireAuth,
    public toastController: ToastController,
    private storage: Storage,
    public UserService:UserService,
    private router : Router,
  ) { }

  ngOnInit() {

  }
  async login(){
    const {email,password}=this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      console.log(res);
      if(res.user){
        this.UserService.setUser({
          email,
          uid:res.user.uid
        });

           }

      this.Logintoast();
    }catch(error){
      console.dir(error);
    }
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
