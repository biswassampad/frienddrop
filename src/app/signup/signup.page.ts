import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
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
  constructor(public afAuth:AngularFireAuth, public UserService:UserService,private router:Router) { }

  ngOnInit() {
  }
  async signup(){
    const {email,password,confirmpassword} = this;
    if(this.confirmpassword === this.password){
        try{
          const user = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
          if(user.user){
            this.UserService.setUser({
              email,
              uid:user.user.uid
            })
            await this.router.navigate(['/verification'])
          }

        }catch(error){
          console.dir(error);
        }
    }
  }

}
