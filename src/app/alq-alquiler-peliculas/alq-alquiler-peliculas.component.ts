import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Alquiler } from '../model/alquiler.model';

@Component({
  selector: 'Alq-alquiler-peliculas',
  templateUrl: './Alq-alquiler-peliculas.component.html',
  styleUrls: ['./Alq-alquiler-peliculas.component.css']
})
export class AlqAlquilerPeliculasComponent implements OnInit {

private alquilerACrear:Alquiler;

  constructor(private http:Http) {
    this.alquilerACrear = new Alquiler();    
   }

  ngOnInit() {

  }

  public guardarCompra()
  {
    this.http.post(
      "http://clase2016.net23.net/api/conexionleo.php",
      this.alquilerACrear
    ).subscribe((response)=>{
      let respuesta = response.json();
      if(respuesta.resultado == 1){
        alert('Compra guardado con éxito');
      }      
      else{
        alert("Hubo un error al guardar la Compra");
      }
    });

      
  }
}