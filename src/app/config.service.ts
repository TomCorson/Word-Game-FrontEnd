import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  getMadLibs(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }
}

