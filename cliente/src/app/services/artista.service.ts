import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Artista} from '../models/artista.model';


@Injectable()
export class ArtistaService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://127.0.0.1:3030/artista';
  }
  getAll(): Observable<Artista[]> {
    return this.httpClient.get<Artista[]>(this.baseUrl + '/get');
  }
  create(artista: Artista): Observable <any> {
    return this.httpClient.post(this.baseUrl + '/guardar' , artista);
  }
  delete(id: number): Observable<Artista> {
    return this.httpClient.delete<Artista>(this.baseUrl + '/eliminar/' + id);
  }
  update( idArtista: number, artista: Artista ): Observable<any> {
    // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.put(this.baseUrl + '/actualizar/' + idArtista, artista);
    // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
  }
  view( id: number ): Observable<Artista> {
    // return this.httpClient.put(`${this.baseUrl}/${idArtista}`, artista);
    return this.httpClient.get<Artista>(this.baseUrl + '/verMas/' + id);
    // return this.httpClient.post<Artista>(this.baseUrl + '/actualizar/' + idArtista , artista);
  }
  /*updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }*/



  // getAll(filterObject?: any): Observable<any> {
  //   let queryString = '';
  //   if (filterObject) {
  //     const fitlerKeys: any[] = Object.keys(filterObject);
  //     if (fitlerKeys.length > 0) {
  //       queryString = '?';
  //     }
  //     fitlerKeys.forEach((key: any, index) => {
  //       if (filterObject[key] !== undefined && filterObject[key] !== null) {
  //         if (filterObject[key].toString().length) {
  //           queryString += `${key}=${filterObject[key]}&`;
  //         }
  //       }
  //     });
  //     if (
  //       fitlerKeys.length > 0 &&
  //       queryString[queryString.length - 1] === '&'
  //     ) {
  //       queryString = queryString.slice(0, -1);
  //     }
  //   }
  //   return this.httpClient.get(`${this.baseUrl}${queryString}`).pipe(
  //     map((body: any) => {
  //       return body;
  //     })
  //   );
  // }
}
