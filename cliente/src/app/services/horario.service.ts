import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horario } from '../models/horario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://127.0.0.1:3037/horario';
  }
  getHorarioPorCargo(IdCargo: number): Observable<Horario[]> {
    return this.httpClient.get<Horario[]>(this.baseUrl + '/get/horariocargo/' + IdCargo);
  }
}
