import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "https://api.artic.edu/api/v1";
  private endpoint = "/artworks";

  constructor(private http: HttpClient) {}

  public fetch(query: string): Observable<any> {
    const data: string[] = ["aardvark", "ant", "core"];
    console.log("a", of(data));
    return of(data);
  }
}
