import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Router} from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  providers:[NoticiasService]
})
export class NewsPage implements OnInit {

  constructor(public menuCtrl:MenuController,public noticiasService:NoticiasService,public router:Router,public loadingController:LoadingController) { 
    
  }
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
   

  public lista_artigos = new Array<any>();
public articles;
 
  ngOnInit() {
    this.menuCtrl.enable(true);
    
  }
  ngAfterContentInit()  {
    this.menuCtrl.enable(true);
   
  }
  ngAfterViewInit() {
    this.menuCtrl.enable(true);
   
  }
  
  ionViewDidEnter(){
    this.efeitoLoading();
    this.carregaNoticias()
  }
carregaNoticias(){
  this.noticiasService.noticiasApp("everything?qInTitle=fluminense&language=pt&sortBy=relevancy&source=globo").subscribe(news =>

    { this.articles =news['articles'];
 /*     const response =(data as any);
    this.lista_artigos = this.lista_artigos.concat(response.results);
    */
  })
  

}
  
/*
  public lista_filmes = new Array<any>();
  public page:number =1;

  carregarPagina(){
    this.movieService.getPopularMovies(1,'eng').subscribe(
    data => 
    {
      const response = (data as any);
      if(this.page==1){
this.lista_filmes = response.results;
      }
      else{
        this.lista_filmes = this.lista_filmes.concat(response.results);
      }

      
     
      console.log(this.lista_filmes);

    },
    error =>{
  console.log(error);
  
  

    }
    
    )}
  ionViewDidEnter(){
    this.efeitoLoading() ;
    this.carregarPagina();
    

  }
  async efeitoLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 5000
    });
    await loading.present();
    const {role,data} =await loading.onDidDismiss();
  }
  efeitoRefresh(event){
    this.page =1;
    this.carregarPagina();
    console.log('iniciando operação assincrona');


  setTimeout(() =>{
    event.target.complete();
    console.log( 'finalizando');
    },5000);
}

sair(){
  navigator['app'].exitApp();
} */
}
