import { Component, OnInit } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import { Cliente } from 'src/app/modelo/Cliente';
import { Vehiculo } from 'src/app/modelo/Vehiculo';
import { AutomovilesService } from 'src/app/services/automoviles/automoviles.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.scss']
})
export class AutomovilesComponent implements OnInit {

  constructor(private automovilesService: AutomovilesService, private clientesService:ClientesService) { }

  items: MegaMenuItem[] = []
  lista: any
  vehiculo: Vehiculo = new Vehiculo()
  display: boolean = false;
  clientes: Cliente[] = [];
  cliente: Cliente[] = [];

  ngOnInit(): void {
    this.buildMenu()
    this.cargarDatos()
  }

  abrirDialog() {
    this.display = true;
  }

  guardar() {
    this.vehiculo.dueno = this.cliente[0].cedula
    this.automovilesService.save(this.vehiculo).subscribe(data => {
      
      console.log(data)
      this.cargarDatos()
      this.display = false;
      this.vehiculo = new Vehiculo();
    })
  }

  cargarDatos() {
    this.automovilesService.getAutos().subscribe(data => {
      this.lista = data
    })

    this.clientesService.getClientes().subscribe(data => {
      this.clientes = data
    }
    )
  }

  buildMenu() {
    this.items = [
      {label: 'Tickets', icon: 'pi pi-money-bill', routerLink: ['/ingresos']},
      {label: 'Administracion', icon: 'pi pi-bars',
        items: [[{items: 
          [{label: 'Clientes', icon: 'pi pi-user-edit', routerLink: ['/clientes']},
          {label: 'Automoviles', icon: 'pi pi-car', routerLink: ['/automoviles']}]}
        ]]},
      {label: 'Historial de Pagos', icon: 'pi pi-money-bill', routerLink: ['/pagos']},
    ]
  }

}
