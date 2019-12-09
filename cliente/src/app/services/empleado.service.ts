import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) { 
    this.baseUrl = 'http://127.0.0.1:3037/empleado';
  }
  getAll(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseUrl + '/get');
  }
  getCantidadGenero(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseUrl + '/get/cantidadgenero');
  }
}
