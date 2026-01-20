import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  titulo: string = 'AsturiasExplorer';
  subtitulo: string = 'Descubre Asturias';

  constructor() { }

  ngOnInit() {
  }
}