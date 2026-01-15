import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService, User } from '../../../services/user';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './form-usuario.html',
  styleUrl: './form-usuario.scss',
})
export class FormUsuarioComponent implements OnInit {

  usuario: User = {
    dni: '',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    // fechaNacimiento: '',
  };

  private dni?: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dni = this.route.snapshot.paramMap.get('dni') ?? undefined;

    if (this.dni) {
      this.userService.getUsuario(this.dni).subscribe({
        next: (u) => (this.usuario = u),
        error: (err) => console.error('Error cargando usuario', err),
      });
    }
  }

  onSubmit() {
    if (this.dni) {
      this.userService.updateUsuario(this.dni, this.usuario).subscribe({
        next: () => this.router.navigate(['/usuarios']),
        error: (err) => console.error('Error actualizando usuario', err),
      });
    } else {
      this.userService.createUsuario(this.usuario).subscribe({
        next: () => this.router.navigate(['/usuarios']),
        error: (err) => console.error('Error guardando usuario', err),
      });
    }
  }
}
