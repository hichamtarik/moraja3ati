import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Material } from '../models/material';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private getURL = this.config.REST_API_SERVER+'/material';

  constructor(private httpClient: HttpClient, private config: ConfigService) { }
  
  getAll(): Observable<Material[]> {
    return this.httpClient.get<IGetResponseMaterial>(this.getURL).pipe(
      map(response => response._embedded.materials));
  }
  getById(id: number): Observable<Material[]> {
    const urlId = '${this.getURL}/${id}';
    return this.httpClient.get<IGetResponseMaterial>(urlId).pipe(
      map(response => response._embedded.materials));
  }
  add(materials: Material): Observable<Material> {
    return this.httpClient.post<Material>(this.getURL, materials, this.config.httpOptions).pipe(catchError(this.config.errorHandler));
  }
  update(id: number, materials: Material): Observable<Material> {
    const urlId = '${this.getURL}/${id}';
    return this.httpClient.put<Material>(urlId, materials, this.config.httpOptions).pipe(catchError(this.config.errorHandler));
  }
  delete(id: number): Observable<Material> {
    const urlId = '${this.getURL}/${id}';
    return this.httpClient.delete<Material>(urlId, this.config.httpOptions).pipe(catchError(this.config.errorHandler));
  }
}
interface IGetResponseMaterial {
  _embedded: {
    materials: Material[];
  }
}