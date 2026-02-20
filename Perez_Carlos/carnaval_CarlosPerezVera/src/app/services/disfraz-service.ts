import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject, signal } from '@angular/core';
import{Disfraz } from '../interfaces/difrazInterfaz';


@Injectable({
  providedIn: 'root',
})
export class DisfrazService {


  private http = inject(HttpClient);

  private httpUrl = 'http://192.168.0.65:8001/api/disfraces';
  public disfraces = signal<Disfraz[]>([]);

  constructor() {

    this.getDisfraces();
  }
getDisfraces(): Observable<any> {
    return this.http.get(this.httpUrl);
  }

  /* getDisfraces() {

    this.http.get<Disfraz[]>('http://192.168.0.65:8001/swagger-ui/index.html#/')
      .subscribe({
        next: (data) => {

          this.disfraces.set(data);
          console.log('Disfraces cargados correctamente');
        },
        error: (err) => {
          console.error('Error al conectar con la API', err);
        }
      });
  } */

}
