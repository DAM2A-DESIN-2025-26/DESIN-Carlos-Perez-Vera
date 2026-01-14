import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './form-usuario.html',
  styleUrl: './form-usuario.scss',
})
export class FormUsuarioComponent {

  usuario = {
    dni: '',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
  };

  onSubmit() {
    console.log('Usuario guardado', this.usuario);
    //Llamada al servicio
  }
}
