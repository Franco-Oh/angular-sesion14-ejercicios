import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Para ejercicio sesion 15
  titulo = 'Data Binding Interpolation';
  opcion:string = "Ocultar";
  mostrarDiv = true;

  cambio(){
    if(this.opcion == 'Ocultar'){
      this.opcion = "Mostrar";
      this.mostrarDiv = false;
      console.log(this.opcion + this.mostrarDiv);
    } else if(this.opcion == 'Mostrar'){
      this.opcion = "Ocultar";
      this.mostrarDiv = true;
      console.log(this.opcion + this.mostrarDiv);
    }
  }

  Two_way:string = "El two-way data binding en Angular nos permite modificar el valor de una propiedad de forma bidireccional."
}
