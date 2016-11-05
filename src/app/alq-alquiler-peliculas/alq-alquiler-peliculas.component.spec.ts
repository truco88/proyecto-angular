/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlqAlquilerPeliculasComponent } from './alq-alquiler-peliculas.component';

describe('AlqAlquilerPeliculasComponent', () => {
  let component: AlqAlquilerPeliculasComponent;
  let fixture: ComponentFixture<AlqAlquilerPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlqAlquilerPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlqAlquilerPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
