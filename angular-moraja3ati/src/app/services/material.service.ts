import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { MaterialDetail } from '../models/material-detail';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private baseURL = 'http://localhost:8080/api/material-details';

  constructor(private httpClient: HttpClient) { }
  getMaterials(): Observable<MaterialDetail[]> {
    return this.httpClient.get<IGetResponseMaterial>(this.baseURL).pipe(
      map(response => response._embedded.materialDetails)
    );
  }
}
interface IGetResponseMaterial {
  _embedded: {
    materialDetails: MaterialDetail[];
  }
}
