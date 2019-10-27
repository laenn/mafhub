import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }
  getData(): Observable<any[]> {
    let data = [
      {start: '2019-10-27', end: '2019-10-29', title: 'HKY01', description: 'TAX FREE' },
      {start: '2019-10-27', title: 'HKY02(2)'},
      {start: '2019-10-28', title: 'HKY30(1)'},
      {start: '2019-10-29', title: 'HKY71'},
      {start: '2019-10-29', title: 'HKY72'},
      {start: '2019-10-29', title: 'HKY73'},
      {start: '2019-10-29', title: 'HKY74'},
    ];
    return of(data);
  }
}
