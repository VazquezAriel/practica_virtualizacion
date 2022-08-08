import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api/megamenuitem';
import { Ticket } from 'src/app/modelo/Ticket';
import { Vehiculo } from 'src/app/modelo/Vehiculo';
import { AutomovilesService } from 'src/app/services/automoviles/automoviles.service';
import { TicketsService } from 'src/app/services/parqueadero/tickets.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.scss']
})
export class IngresosComponent implements OnInit {

  constructor(private ticketService:TicketsService, private vehiculosService: AutomovilesService) { }

  items: MegaMenuItem[] = []
  lista: any
  ticket: Ticket = new Ticket()
  display: boolean = false;
  vehiculos: Vehiculo[] = [];
  vehiculo: Vehiculo[] = [];

  ngOnInit(): void {
    this.buildMenu()
    this.cargarDatos()
  }

  abrirDialog() {
    this.display = true;
    this.ticket.hora_llegada = new Date();
  }

  guardar() {
    this.ticket.vehiculo = this.vehiculo[0].placa
    this.ticketService.save(this.ticket).subscribe(data => {
      console.log(data)
      this.cargarDatos()
      this.display = false;
      this.ticket = new Ticket();
    })
  }

  finalizar(ticket:Ticket) {
    console.log(ticket)
    ticket.hora_salida = new Date();
    ticket.estado = "Finalizado";
    this.ticketService.save(ticket).subscribe(data => {
      console.log(data)
      console.log(ticket)
      this.cargarDatos()
      this.ticket = new Ticket();
    })
  }

  cargarDatos() {
    this.ticketService.getTicketsActivos().subscribe(data => {
      this.lista = data
    })

    this.vehiculosService.getAutos().subscribe(data => {
      this.vehiculos = data
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
