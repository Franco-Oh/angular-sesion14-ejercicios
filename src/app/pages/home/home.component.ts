import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //Para el ejemplo hecho en clase
  subtitulo:string = 'Componentes';

  cambiarSubTitulo(){
    this.subtitulo = 'Nuevo sub titulo desde el Padre';
  }

  textoEnPadre!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
