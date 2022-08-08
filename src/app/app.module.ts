import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { AutomovilesComponent } from './pages/automoviles/automoviles.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DataViewModule} from 'primeng/dataview';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    AutomovilesComponent,
    PagosComponent,
    ClientesComponent,
    IngresosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    DataViewModule,
    CascadeSelectModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
