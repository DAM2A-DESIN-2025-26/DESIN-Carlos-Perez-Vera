import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-incidencias-list',
  imports: [RouterLink],
  templateUrl: './incidencias-list.html',
  styleUrl: './incidencias-list.css',
})
export class IncidenciasList {
   incidencias = [
  {
    id:'1',
    titulo: 'Proyector no funciona',
    aula: 'Aula 101',
    categoria: 'Hardware',
    usuario: 'Carlos',
    estado: 'Abierta',
    prioridad: 'Alta'
  },
  {
    id:'2',
    titulo: 'No hay internet',
    aula: 'Aula 205',
    categoria: 'Red',
    usuario: 'Lucia',
    estado: 'En proceso',
    prioridad: 'Media'
  },
  {
    id:'3',
    titulo: 'Ordenador no enciende',
    aula: 'Aula 12',
    categoria: 'Hardware',
    usuario: 'Mario',
    estado: 'Resuelta',
    prioridad: 'Alta'
  }
];

abiertas = this.incidencias.filter(i => i.estado === 'Abierta').length;
}
