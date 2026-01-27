import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  FormsModule, 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonInput, 
  IonToggle, 
  IonButton, 
  IonText, 
  IonAlert 
} from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonList, 
    IonItem, 
    IonInput, 
    IonToggle, 
    IonButton, 
    IonText, 
    IonAlert, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class ConfiguracionPage implements OnInit {
  
  
  miFormulario: FormGroup;

  
  public botonesAlerta = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Operación de restablecimiento cancelada');
      },
    },
    {
      text: 'Sí, Restablecer',
      role: 'confirm',
      handler: () => {
        this.miFormulario.reset(); 
        console.log('Formulario restablecido correctamente');
      },
    },
  ];

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) {
    
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(13), Validators.max(99)]],
      notificaciones: [false]
    });
  }

  ngOnInit() {}

  
  async guardarPerfil() {
    if (this.miFormulario.valid) {
      const datos = this.miFormulario.value;
      
      const alerta = await this.alertCtrl.create({
        header: 'Perfil Guardado',
        subHeader: 'Datos actualizados con éxito',
        message: `Usuario: ${datos.nombre}\nContacto: ${datos.email}`,
        buttons: ['Entendido']
      });

      await alerta.present();
    }
  }
}