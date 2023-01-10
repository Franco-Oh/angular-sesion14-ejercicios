import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from './hijo/hijo.component';
import { HeaderComponent } from './header/header.component';
import { Hijo2Component } from './hijo2/hijo2.component';



@NgModule({
  declarations: [
    HijoComponent,
    HeaderComponent,
    Hijo2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HijoComponent,
    HeaderComponent,
    Hijo2Component
  ]
})
export class ComponentsModule { }
