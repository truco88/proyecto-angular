import { Component } from '@angular/core';

import { Http } from '@angular/http';

import { Alquiler } from './model/alquiler.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  comprasList:Array<Alquiler> = new Array<Alquiler>();

  constructor(private http:Http){

  }

  mostrarCompras(){
    this.http
    .get("http://clase2016.net23.net/api/conexionleo.php")
    .subscribe((response)=>{
      this.comprasList = response.json();
      console.log(this.comprasList);
      let listar = document.getElementById("listar");
      
    });            
  }
 

}
