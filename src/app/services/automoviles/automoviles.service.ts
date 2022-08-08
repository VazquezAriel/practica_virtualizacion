import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from 'src/app/modelo/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class AutomovilesService {

  constructor(private http: HttpClient) { }

  url:String = "http://127.0.0.1:8085/parqueadero/vehiculos/";

  getAutos(): Observable<any> {
    let urlPrincipal = this.url + "cargarDatos";
    return  this.http.get<any>(urlPrincipal)
  }

  save(auto: Vehiculo):Observable<any> {
    let urlPrincipal = this.url + "registrar";    
    return this.http.post<any>(urlPrincipal, auto)
  }
}
