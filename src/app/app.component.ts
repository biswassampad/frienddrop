import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Ride',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'My Rides',
      url: '/rides',
      icon: 'car'
    },
    {
      title: 'Ridy Credits',
      url: '/credits',
      icon: 'card'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'cog'
    },
    {
      title: 'Report a ride',
      url: '/report',
      icon: 'warning'
    },
    {
      title: 'Share',
      url: '/share',
      icon: 'redo'
    },
    {
      title: 'About Ridy',
      url: '/about',
      icon: 'journal'
    },
    {
      title: 'Support',
      url: '/support',
      icon: 'cafe'
    },
    {
      title: 'Terms & Conditions',
      url: '/terms',
      icon: 'expand'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
