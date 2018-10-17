import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Provider} from "../../providers/provider/provider";
import {UserInfo} from "../../app/models/UserInfo";
import {LoginPage} from "../login/login";
import {App} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  autentication;
  user:UserInfo = new UserInfo();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private app:App,
              private provider: Provider) { this.getUserInfo(); }


  getUserInfo(){
    let autentication= this.provider.autentication;
    console.log("autenticazione: "+autentication );
    if(autentication=='google') {
      this.user = this.provider.user;
    }else{
      this.user.givenName="Guest";
      this.user.imageUrl="../../assets/imgs/guest.png";
      this.user.familyName="-";
      this.user.email=this.provider.email;
    }

  }

  logout() {
    this.provider.logout();
    this.app.getRootNav().setRoot(LoginPage);
  }
}
