import { Component, OnInit } from '@angular/core';
import { IonFooter, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone:true,
  imports:[IonFooter, IonToolbar ]
})
export class FooterComponent  implements OnInit {

  constructor() { }

  copyright:string="AsturiasExplorer";
  anio:string="2026";

  ngOnInit() {}

}
