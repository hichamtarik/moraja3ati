import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Material } from '../models/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private materialURL = 'http://localhost:8080/api/v1/materials';

  constructor(private httpClient: HttpClient) { }

  getMaterials(): Observable<Material[]> {
    return this.httpClient.get<IGetResponseMaterial>(this.materialURL).pipe(
      map(response => response._embedded.materials)
    );
  }
  get(id: number): Observable<Material>{
    const materialIdUrl = '${this.materialURL}/${id}';
    return this.httpClient.get<Material>(materialIdUrl);
  }
}
interface IGetResponseMaterial {
  _embedded: {
    materials: Material[];
  }
}