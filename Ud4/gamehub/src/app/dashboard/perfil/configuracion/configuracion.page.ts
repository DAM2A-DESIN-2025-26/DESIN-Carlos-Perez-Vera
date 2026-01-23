import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular/standalone';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput,
IonLabel, IonButton, IonToggle, IonChip, IonButtons  // ← AÑADE

} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  standalone: true,
  imports: [
  CommonModule, ReactiveFormsModule,
  IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput,
  IonLabel, IonButton, IonToggle, IonChip, IonButtons  // ← AÑADE IonButtons
],

})
export class ConfiguracionPage {
  formPerfil: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    this.formPerfil = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      edad: [null, [Validators.min(13), Validators.max(99)]],
      notificaciones: [false]
    });
  }

  async activarNotificaciones() {
    const alert = await this.alertCtrl.create({
      header: 'Preferencias',
      message: 'Notificaciones de lanzamientos activadas',
      buttons: ['OK']
    });
    await alert.present();
  }

  async normasUso() {
    const alert = await this.alertCtrl.create({
      header: 'GameHub',
      subHeader: 'Aviso',
      message: 'No compartas tu cuenta con terceros.',
      buttons: ['Entendido']
    });
    await alert.present();
  }

  volverPerfil() {
    this.navCtrl.pop();
  }

  guardarPerfil() {
    if (this.formPerfil.valid) {
      console.log('Perfil guardado:', this.formPerfil.value);
      // TODO: alert con datos completos
    }
  }
}
