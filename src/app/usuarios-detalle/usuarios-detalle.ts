import { Component, inject, OnInit } from '@angular/core';
import { Services } from '../services/services';
import { Usuario } from '../api/usuarioClass';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-detalle',
  standalone: false,
  templateUrl: './usuarios-detalle.html',
  styleUrl: './usuarios-detalle.css',
})
export class UsuariosDetalle implements OnInit {

  private usuarioService = inject(Services)
  private route = inject(ActivatedRoute)
  usuario: any

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.cargarUsuario(id)
  }

  cargarUsuario(id: any) {
    this.usuario = this.usuarioService.getUsuarioById(id)
  }

}
