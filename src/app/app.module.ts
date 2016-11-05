import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlqAlquilerPeliculasComponent } from './alq-alquiler-peliculas/alq-alquiler-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    AlqAlquilerPeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
