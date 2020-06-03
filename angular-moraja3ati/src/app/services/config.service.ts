import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    private static baseURL: string = 'http://localhost:8080/api/v1/';
}
