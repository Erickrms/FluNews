  
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router} from '@angular/router';
import { IonMenu, IonToggle, MenuController } from '@ionic/angular';
import { NgZone } from '@angular/core';
import { LoadingController} from '@ionic/angular'
declare var google;


@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage  {
  map: any;
  

  constructor(private geolocation: Geolocation,public router:Router, public loadingController:LoadingController) { }
  async efeitoLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 1000
    });
    await loading.present();
    const {role,data} =await loading.onDidDismiss();
  }

  Rotas(destino){
    this.efeitoLoading();
    this.router.navigate(destino);


   }
 
   
  ngOnInit() {


    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 18,
          center: position,
          disableDefaultUI:true
        }

        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const marker = new google.maps.Marker({
          position: position,
          map: this.map,
          animation: google.maps.Animation.BOUNCE
        });

      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }
 
}
    