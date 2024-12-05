import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './servicios/cliente.service';
import { DetallesComponent } from './detalles/detalles.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ClienteService]
})
export class AppComponent {
  public clientes:Array<Cliente>;
  public posicion:number=-1;
  public cliente = new Cliente(0,"Nombre","Apellido",0,0);


constructor(private _clienteService:ClienteService){
  this.clientes=this._clienteService.getClientes();
}
  verDetalles(i:number){
    console.log(this.clientes[i].id);
    console.log(this.clientes[i].nombre);
    this.posicion=i;
    this.cliente=this.clientes[i];
  }
}
