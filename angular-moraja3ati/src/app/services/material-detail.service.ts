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
  private getURL = this.config.REST_API_SERVER+'/material-details';

  constructor(private httpClient: HttpClient, private config: ConfigService) { }
  
  getAll(): Observable<MaterialDetail[]> {
    return this.httpClient.get<IGetResponseMaterialDetail>(this.getURL).pipe(
      map(response => response._embedded.materialDetails)
    );
  }
}

interface IGetResponseMaterialDetail {
  _embedded: {
    materialDetails: MaterialDetail[];
  }
}