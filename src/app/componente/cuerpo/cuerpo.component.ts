import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  Lista: Array<string> = []
  estilo: String=""
  alumno: string = ""

  constructor() { }

  ngOnInit(): void {
  }
  agregarEstudiante() {
    if (this.Lista.length < 10) {
      this.Lista.push(this.alumno)
      this.alumno=""
    } else {
      alert("Ya no agregar mas nombres,lista llena")
    }
    if(this.Lista.length === 5){
      this.estilo="color"
    }
  }

}
