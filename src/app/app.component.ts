import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <br/>
    <input id='type-ahead'/>
    <br/>
    <div id='output'></div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Watch user keyboard input
    this.typeahead();
  }

  // Observable of filtered search results
  public fetchData = keys => of(this.filterData(keys));

  // Compare user input to available list, filter results
  private filterData(keys) {
    if (keys.length) {
      return [
        'argue',
        'attest',
        'authenticate',
        'bear',
        'certify',
        'confirm',
      ].filter(option => option.includes(keys))
    } else {
      return []
    }
  }

  public typeahead() {
    fromEvent(document.getElementById('type-ahead'), 'keyup')
      .pipe(
        // Extract text typed by user
        map((e: any) => e.target.value),
        // Take latest emitted input, ignore old input
        switchMap(this.fetchData),
        // Display result in HTML
        tap(c => document.getElementById('output').innerText = c.join('\n'))
      ).subscribe();
  }
}