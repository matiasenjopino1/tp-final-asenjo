import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Services } from '../services/services';

@Component({
  selector: 'app-usuarios-crear',
  standalone: false,
  templateUrl: './usuarios-crear.html',
  styleUrl: './usuarios-crear.css',
})
export class UsuariosCrear {

  usuarioForm!: FormGroup;
  private usuarioService = inject(Services)
  constructor(private fb:FormBuilder){
    this.usuarioForm = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      correo:['',[Validators.required,Validators.email]],
      rol:['',[Validators.required]],
      estado:[true,[Validators.required]]
    })
  }

  guardarUsuario():void {
    if(this.usuarioForm.invalid){
      this.usuarioForm.markAllAsTouched();
      return
    }
    this.usuarioService.addUsuario(this.usuarioForm.value)

    this.usuarioForm.reset({
      estado:true
    })
  }

}
