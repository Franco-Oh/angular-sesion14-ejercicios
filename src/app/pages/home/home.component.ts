import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subtitulo:string = 'Componentes';

  cambiarSubTitulo(){
    this.subtitulo = 'Nuevo sub titulo desde el Padre';
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
