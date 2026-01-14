import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Usuario {
  dni: string;
  nombre: string;
  apellidos: string;
}

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.scss',
})
export class ListaUsuariosComponent {

  usuarios: Usuario[] = [
    { dni: '12345678A', nombre: 'Ana', apellidos: 'García López' },
    { dni: '23456789B', nombre: 'Luis', apellidos: 'Pérez Díaz' },
    { dni: '34567890C', nombre: 'Marta', apellidos: 'Sánchez Ruiz' },
  ];

}
