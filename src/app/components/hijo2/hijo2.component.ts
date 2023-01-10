import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component implements OnInit {

  //Para el ejercicio de la seison 14
  @Input() textoEnHijo!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
