import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../models/cargo.model';

@Injectable({
  providedIn: 'root'
})

export class CargoService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://127.0.0.1:3037/cargo';
  }
  getAll(): Observable<Cargo[]> {
    return this.httpClient.get<Cargo[]>(this.baseUrl + '/get');
  }
}
