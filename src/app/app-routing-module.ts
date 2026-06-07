import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';

const routes: Routes = [
  {path:'inicio',component:Inicio},
  {path:'usuarios',loadChildren: () => import('./usuarios/usuarios-module').then(m => m.UsuariosModule)},
  {path:'productos',loadChildren: () => import('./productos/productos-module').then(m => m.ProductosModule)},
  {path:'**',component:Inicio}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
