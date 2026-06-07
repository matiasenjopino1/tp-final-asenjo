import { Component, inject, OnInit } from '@angular/core';
import { Services } from '../services/services';
import { Producto } from '../api/productosClass';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos  implements OnInit{

  private productoService = inject(Services)

  productos:Producto[] = []

  ngOnInit(): void {
   this.cargarProductos() 
  }



  cargarProductos() {
    this.productos = this.productoService.getProductos()
  }

    borrarProducto(id: any): void {
    this.productoService.deleteProducto(id)
  }
}
