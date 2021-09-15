import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFormat} from './structure'

@Injectable({
  providedIn: 'root'
})
export class GetapidataService {

  constructor( private http: HttpClient) { }

  getApiData() {
    
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
