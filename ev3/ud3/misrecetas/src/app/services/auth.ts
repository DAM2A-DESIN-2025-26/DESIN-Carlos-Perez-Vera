import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://dummyjson.com/auth';
  
  // Signal para saber si el usuario está logueado
  isLoggedIn = signal<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Verificar si hay token al iniciar la app
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('token');
    this.isLoggedIn.set(!!token);
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      username,
      password,
      expiresInMins: 30
    });
  }

  guardarToken(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn.set(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.set(false);
    this.router.navigate(['/listado']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}