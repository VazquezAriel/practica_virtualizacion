import { Component, OnInit } from '@angular/core';
import {MegaMenuItem} from 'primeng/api';
import { TicketsService } from 'src/app/services/parqueadero/tickets.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  constructor(private ticketService:TicketsService) { }

  items: MegaMenuItem[] = [];
  lista: any

  ngOnInit(): void {
    this.buildMenu()
    this.cargarDatos()
  }

  cargarDatos() {
    this.ticketService.getTicketsFinalizados().subscribe(data => {
      this.lista = data
    })
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
