import { Component,inject,OnInit,signal } from '@angular/core';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuarios';
import { UsuarioInterface } from '../../interfaces/usuario';

@Component({
  selector: 'app-usuarios-detalle',
  imports: [RouterLink],
  templateUrl: './usuarios-detalle.html',
  styleUrl: './usuarios-detalle.css',
})
export class UsuariosDetalle implements OnInit{

  private route = inject(ActivatedRoute);
  private usuarioService = inject(UsuarioService);

  usuario = signal<UsuarioInterface | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getUsuariosById(id).subscribe(data => {this.usuario.set(data);});
  }
}
