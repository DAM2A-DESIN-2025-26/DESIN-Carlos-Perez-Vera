import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  dni: string;
  nombre: string;
  apellidos: string;
  email?: string;
  telefono?: string;
   fechaNacimiento?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://daw2a26-1.iesmontenaranco.com/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUsuario(dni: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${dni}`);
  }

  createUsuario(usuario: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, usuario);
  }

  updateUsuario(dni: string, usuario: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${dni}`, usuario);
  }
}
