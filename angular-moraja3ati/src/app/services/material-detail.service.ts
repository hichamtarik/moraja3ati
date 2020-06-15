import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaterialDetail } from '../models/material-detail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MaterialDetailService {

  private Url = new ConfigService;
  private materialDetailURL = 'http://localhost:8080/api/v1/material-details';

  constructor(private httpClient: HttpClient) { }
  
  getMaterialDetails(): Observable<MaterialDetail[]> {
    return this.httpClient.get<IGetResponseMaterialDetail>(this.materialDetailURL).pipe(
      map(response => response._embedded.materialDetails)
    );
  }
}

interface IGetResponseMaterialDetail {
  _embedded: {
    materialDetails: MaterialDetail[];
  }
}