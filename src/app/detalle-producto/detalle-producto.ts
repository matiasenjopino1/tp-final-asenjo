import { Component, inject, OnInit } from '@angular/core';
import { Services } from '../services/services';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../api/productosClass';

@Component({
  selector: 'app-detalle-producto',
  standalone: false,
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto  implements OnInit{

  private service = inject(Services)
  private route = inject(ActivatedRoute)
  producto!:Producto 
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.producto = this.service.getProductoId(id)!;
  }

}
