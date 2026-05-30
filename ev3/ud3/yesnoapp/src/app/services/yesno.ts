import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface YesnoResponse{
  answer: string;    
  forced: boolean;     
  image: string;
}

@Injectable({
  providedIn: 'root',
})

export class YesnoService {
   private apiUrl = 'https://yesno.wtf/api';  

     constructor(private http: HttpClient) {}

   obtenerRespuesta(){
     return this.http.get<YesnoResponse>(this.apiUrl);
   }
}
