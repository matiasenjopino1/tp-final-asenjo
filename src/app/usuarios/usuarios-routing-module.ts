import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usuarios } from './usuarios';
import { UsuariosDetalle } from '../usuarios-detalle/usuarios-detalle';
import { UsuariosCrear } from '../usuarios-crear/usuarios-crear';

const routes: Routes = [
  {path:'',component:Usuarios},
  {path:'crear',component:UsuariosCrear},
  {path:':id',component:UsuariosDetalle}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
