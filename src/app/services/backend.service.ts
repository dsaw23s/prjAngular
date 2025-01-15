// BackendService.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'https://crudrapido-app-latest.onrender.com'; // URL de tu backend Spring Boot
//private baseUrl = 'http://localhost:8080'; // URL de tu backend Spring Boot

  constructor(private http: HttpClient) {}

  // Método para obtener datos un texto simple (ya está configurado)
  getDatos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/datos`);
  }

  // Método para obtener todos lo usuarios
  getDatosTOdosUsuarios(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/todosLosUsuarios`);
  }




enviarDato(dato: string): Observable<any> {
  return this.http.post(`${this.baseUrl}/api/recibirDato`, dato, { responseType: 'text' });
}

  // Método modificado para enviar datos en formato JSON
  enviarDatoJson(dato: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/recibirDatoJson`, dato, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json'
    });
  }







}
