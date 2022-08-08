import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ticket } from 'src/app/modelo/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  url:String = "http://127.0.0.1:8080/gestiones/";

  getTicketsActivos(): Observable<any> {
    let urlPrincipal = this.url + "cargarTickets";
    return  this.http.get<any>(urlPrincipal)
  }

  save(ticket: Ticket):Observable<any> {
    let urlPrincipal = this.url + "registrarTicket";    
    return this.http.post<any>(urlPrincipal, ticket)
  }

  getTicketsFinalizados(): Observable<any> {
    let urlPrincipal = this.url + "cargarTicketsFinalizados";
    return  this.http.get<any>(urlPrincipal)
  }
}
