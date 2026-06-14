import { Component,inject,OnInit,signal } from '@angular/core';
import { UsuarioInterface } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/usuarios';
import { RouterLink } from '@angular/router';
import { IncidenciaService } from '../../services/incidencias';

@Component({
  selector: 'app-usuarios',
  imports: [RouterLink],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements OnInit{

  private usuarioService = inject(UsuarioService);
  usuarios = signal<UsuarioInterface[]>([]);

  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe(data=>{ this.usuarios.set(data);});
  }

}
