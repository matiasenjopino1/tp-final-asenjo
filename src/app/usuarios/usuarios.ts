import { Component, inject, OnInit } from '@angular/core';
import { Services } from '../services/services';
import { Usuario } from '../api/usuarioClass';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements OnInit {
  usuarios: Usuario[] = []
  private serviceUsuario = inject(Services)
  ngOnInit(): void {
    this.cargarUsuarios()
  }


  cargarUsuarios() {
    this.usuarios = this.serviceUsuario.getUsuarios()
  }

  eliminarUsuario(id:any){
    this.serviceUsuario.deleteUsuario(id)
  }

  changeEstadoUsuario(id:any){
    this.serviceUsuario.cambiarEstadoUsuario(id)
  }
}
