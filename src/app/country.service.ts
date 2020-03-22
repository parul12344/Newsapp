import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
api_url='assets/country.json'
  constructor(private http:HttpClient) { }

  getCountry(){
    return this.http.get(this.api_url);
  }

  
}
