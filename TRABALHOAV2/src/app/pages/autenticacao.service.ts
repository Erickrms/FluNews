import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public ngFireAuth:AngularFireAuth) { }
    loginNoFirebase(email,senha){
return  this.ngFireAuth.signInWithEmailAndPassword(email,senha)

    }
    insereNoFirebase(email,senha){
      return  this.ngFireAuth.createUserWithEmailAndPassword(email,senha)
    }
}
