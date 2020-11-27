import { Component, OnInit } from '@angular/core';
import { IonMenu, IonToggle, MenuController } from '@ionic/angular';
import { Router} from '@angular/router';
import { LoadingController} from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
 
  constructor(private menu: MenuController,public router:Router,public loadingController:LoadingController) { }
  async efeitoLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 2000
    });
    await loading.present();
    const {role,data} =await loading.onDidDismiss();
  }

  Rotas(destino){
    this.efeitoLoading();
    this.router.navigate(destino);


   }
  ngOnInit() {    
  }
 
 
 
}
