import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Inicio } from './inicio/inicio';
import { UsuariosDetalle } from './usuarios-detalle/usuarios-detalle';
import { UsuariosCrear } from './usuarios-crear/usuarios-crear';
import { DetalleProducto } from './detalle-producto/detalle-producto';
import { DescuentoPipePipe } from './pipes/descuento-pipe-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Inicio, UsuariosDetalle, UsuariosCrear, DetalleProducto],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
