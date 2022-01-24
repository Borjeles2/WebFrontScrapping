export class PeliculaModel {
    nombre: string;
    fechaestreno:Date;
    imagen: string;

   constructor(nombre: string, fechaestreno:Date, imagen: string) {
   this.nombre = nombre;
   this.fechaestreno = fechaestreno;
   this.imagen = imagen;
}
}
