import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonItem,
  IonLabel, IonInput, IonButton,
  ToastController
} from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem,
    IonLabel, IonInput, IonButton
  ]
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Si ya está logueado, redirigir al listado
    if (this.authService.isLoggedIn()) {  // Signal - se llama como función
      this.router.navigate(['/listado']);
    }
  }

  async login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      this.authService.login(username, password).subscribe({
        next: async (response) => {
          // Guardar token en localStorage
          this.authService.guardarToken(response.token);
          
          // Mostrar toast de éxito
          const toast = await this.toastController.create({
            message: `¡Bienvenido ${response.firstName}!`,
            duration: 2000,
            color: 'success'
          });
          await toast.present();
          
          // Redirigir al listado
          this.router.navigate(['/listado']);
        },
        error: async (error) => {
          // Mostrar error
          const toast = await this.toastController.create({
            message: 'Usuario o contraseña incorrectos',
            duration: 3000,
            color: 'danger'
          });
          await toast.present();
          console.error('Error en login:', error);
        }
      });
    }
  }
}