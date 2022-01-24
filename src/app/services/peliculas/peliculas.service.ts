import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculaModel } from 'src/app/pelicula-model/pelicula-model';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private API_SERVER = "http://localhost:8091/peliculas";

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllPeliculas() {
    return this.httpClient.get<PeliculaModel[]>(this.API_SERVER);
  }
}
