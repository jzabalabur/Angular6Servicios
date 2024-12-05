import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ClienteService {
  public clientes:Array<Cliente>;

  constructor() {
    this.clientes=[
      new Cliente(1,"Ane","Goikuria",22,446),
      new Cliente(2,"Anton","Tschanz",19,603),
      new Cliente(3,"Robert","Rosu",20,602),
      new Cliente(4,"Pablo","Perucha",39,948),
      new Cliente(5,"Jon","Alberdi",20,12),
      new Cliente(6,"Ibai","Amo",20,125),
      new Cliente(7,"Sofia","Cañabate",22,340),
      new Cliente(8,"Ian","Castaño",19,250)
    ]
   }

   getClientes():Array<Cliente>{
    return this.clientes;
   }
}
