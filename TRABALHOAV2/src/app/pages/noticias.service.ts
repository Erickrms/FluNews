import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
const chave =environment.chave;
const caminhoPadrao = environment.caminhopadrao;
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(public http:HttpClient ) { }
public noticiasApp(url){
  let artigos = `${caminhoPadrao}/${url}&apiKey=${chave}`;
  return this.http.get(artigos);

}

}
