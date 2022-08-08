import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from 'src/app/modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  url:String = "http://35.223.255.170:8090/usuarios/gestionar/";

  getClientes(): Observable<any> {
    let urlPrincipal = this.url + "cargarDatos";
    return  this.http.get<any>(urlPrincipal)
  }

  save(cliente: Cliente):Observable<any> {
    let urlPrincipal = this.url + "registrar";    
    return this.http.post<any>(urlPrincipal, cliente)
  }
}
