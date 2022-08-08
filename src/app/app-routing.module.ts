import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomovilesComponent } from './pages/automoviles/automoviles.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { IngresosComponent } from './pages/ingresos/ingresos.component';


const routes: Routes = [
  {path: "automoviles", component:AutomovilesComponent},
  {path: "pagos", component:PagosComponent},
  {path: "clientes", component:ClientesComponent},
  {path: "ingresos", component:IngresosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
