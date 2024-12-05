import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../models/cliente';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
  @Input() cliente:Cliente= new Cliente(0,"Nombre","Apellido",0,0);
  @Input() posicion:number=-1;

  @Output() editarDatos = new EventEmitter();

  modificarDatos(){
    // ??????????????
    console.log(this.cliente.nombre);
  }
}
