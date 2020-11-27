import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router} from '@angular/router';
import { ToastController} from '@ionic/angular';
import { AutenticacaoService } from '../autenticacao.service';
import { LoadingController} from '@ionic/angular'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides:IonSlides;
  constructor( public autenticacaoService: AutenticacaoService,public loadingController:LoadingController, public router:Router,public toastController:ToastController, loading:LoadingController) { }

  ngOnInit() {
  }
segmentChanged(event:any){
if (event.detail.value ==="login"){
  this.slides.slidePrev();
}else{
  this.slides.slideNext();
}
}

  public email:string="";
  public senha:string="";
  public mensagem:string="";

  async insereUsuario(){
   
    this.autenticacaoService.insereNoFirebase(this.email, this.senha).then((res) => { this.router.navigate(['/news']);}).catch((error) => {this.mensagem = "Erro ao incluir Usuário";
    this.exibeMensagem();
  })
  }

    async  exibeMensagem(){
      const toast = await this.toastController.create({
        message: this.mensagem,
        duration:2000

      });
      toast.present();
    }
    login(){
      this.efeitoLoading();
      this.autenticacaoService.loginNoFirebase(this.email, this.senha).then((res) => { this.router.navigate(['/news']);}).catch((error) => {this.mensagem = "Email ou senha incorreto(s)";
      this.exibeMensagem();
    })
  }
  async efeitoLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 2000
    });
    await loading.present();
    const {role,data} =await loading.onDidDismiss();
  }
}

