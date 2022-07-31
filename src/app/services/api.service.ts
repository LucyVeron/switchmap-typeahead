import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "https://api.artic.edu/api/v1";
  private endpoint = "/artworks";

  constructor(private http: HttpClient) {}

  public fetchData = keys => of(this.filterData(keys));

  private filterData(keys) {
    return [
      'africa',
      'antarctica',
      'asia',
      'australia',
      'europe',
      'north america',
      'south america'
    ].filter(option => option.includes(keys))
  }
}
