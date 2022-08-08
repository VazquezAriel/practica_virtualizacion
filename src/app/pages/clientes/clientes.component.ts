import { Component, OnInit } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import { Cliente } from 'src/app/modelo/Cliente';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private clientesService: ClientesService) { }

  items: MegaMenuItem[] = [];
  lista: any
  cliente: Cliente = new Cliente()
  display: boolean = false;

  ngOnInit(): void {
    this.buildMenu()
    this.cargarDatos()
    
  }
  guardar(){
    this.clientesService.save(this.cliente).subscribe(data => {
      console.log(data)
      this.cargarDatos()
      this.display = false;
      this.cliente = new Cliente();
    })
  }

  cargarDatos() {
    this.clientesService.getClientes().subscribe(data => {
      this.lista = data
    })
  }

  abrirDialog() {
    this.display = true;
  }

  buildMenu() {
    this.items = [
      {label: 'Administracion', icon: 'pi pi-bars',
        items: [[{items: 
          [{label: 'Clientes', icon: 'pi pi-user-edit', routerLink: ['/clientes']},
          ]}
        ]]},
    ]
  }

  

}
