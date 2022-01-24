import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './services/peliculas/peliculas.service';
import { PeliculaModel } from './pelicula-model/pelicula-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  peliculas: PeliculaModel[] = [];


  constructor(
    public peliculaService: PeliculasService,

  ) {

  }
  ngOnInit(): void {

    this.peliculaService.getAllPeliculas().subscribe(
      result =>{
        this.peliculas = result;
        for (let i = 0; i < this.peliculas.length; i++) {
          this.peliculas[i].imagen = 'data:image/jpg;base64,' + this.peliculas[i].imagen;
        }
        this.peliculas = _.orderBy(this.peliculas, o => o.fechaestreno);
        }
      );
  }
}
