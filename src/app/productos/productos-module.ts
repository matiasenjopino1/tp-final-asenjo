import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing-module';
import { Productos } from './productos';
import { DescuentoPipePipe } from '../pipes/descuento-pipe-pipe';

@NgModule({
  declarations: [Productos,DescuentoPipePipe],
  imports: [CommonModule, ProductosRoutingModule],
})
export class ProductosModule {}
