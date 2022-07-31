import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.typeahead();
  }

  public typeahead() {
    fromEvent(document.getElementById('type-ahead'), 'keyup')
      .pipe(
        debounceTime(100),
        map((e: any) => e.target.value),
        switchMap(this.apiService.fetchData),
        tap(c => document.getElementById('output').innerText = c.join('\n'))
      ).subscribe();
  }
}