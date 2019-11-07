import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireStorageModule } from '@angular/fire/storage';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
  pool:boolean=null
  registrationmode:string="rider"
  idcard={}
  name:string=""
  mobile:string=""
  idcard_type={}
  idcard_no:string=""
  vehicle_number:string=""
  vehicle_rc={}
  dl_number:string=""
  dl_img={}

  constructor( 
    public toastController: ToastController,
    private storage:AngularFireStorageModule
    ) { }

  ngOnInit() {
  
  }
  changeRegistrationMode(){
    console.log(this.pool);
    if(this.pool == true){
      this.registrationmode = "pooler";
      this.changeModeToastToPool();
    }else if(this.pool == false){
      this.registrationmode = "rider";
      this.changeModeToastToRide();
    }
}


async changeModeToastToPool(){
  const toast= await this.toastController.create({
    message:'Mode changed to Pool',
    duration:2000,
    color:'dark'
  });
  toast.present();
}
async changeModeToastToRide(){
  const toast= await this.toastController.create({
    message:'Mode changed to Ride',
    duration:2000,
    color:'dark'
  });
  toast.present();
}
UploadVerification(){
 this.uplodaidcard(event);
}
uplodaidcard(event){

}
}
