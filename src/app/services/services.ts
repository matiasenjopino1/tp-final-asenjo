import { Injectable } from '@angular/core';
import productos from '../api/productos';
import { Producto } from '../api/productosClass';
import usuarios from '../api/usuarios';
import { Usuario } from '../api/usuarioClass';

@Injectable({
  providedIn: 'root',
})
export class Services {

  getProductos() {
    return productos
  }
  addProducto(productoRaw: Omit<Producto, 'id'>) {

    const producto_id = productos.length > 0 ? Math.max(...productos.map(producto => producto.id)) + 1 : 1
    const new_product: Producto = {
      id: producto_id,
      ...productoRaw
    }
    productos.push(new_product)
  }

  deleteProducto(id: any) {
    const index = productos.findIndex((producto: any) => producto.id === id)
    if (index !== 1) {
      productos.splice(index, 1)
    }
  }

  getProductoId(id:any) {
    return productos.find(producto => producto.id === id)
  }
  getUsuarios() {
    return usuarios
  }



   addUsuario(usuarioRaw: Omit<Usuario, 'id'>) {

    const usuario_id = usuarios.length > 0 ? Math.max(...usuarios.map(usuario => usuario.id)) + 1 : 1
    const new_product: Usuario = {
      id: usuario_id,
      ...usuarioRaw
    }
    usuarios.push(new_product)
  }

   getUsuarioById(id:any) {
    return usuarios.find(usuario => usuario.id === id)
  }

   deleteUsuario(id: any) {
    const index = usuarios.findIndex((usuario: any) => usuario.id === id)
    if (index !== 1) {
      usuarios.splice(index, 1)
    }
  }

  cambiarEstadoUsuario(id:any) {
    const usuario = usuarios.find(u => u.id === id)
    if(usuario){
      usuario.estado = !usuario.estado
    }
  }
}
