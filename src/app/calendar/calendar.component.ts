import { Component, OnInit } from '@angular/core';
import dayGridView from '@fullcalendar/daygrid';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarEvents: any[] = [];
  calendarPlugins = [dayGridView];
  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.calendarService.getData().subscribe(data => this.calendarEvents = data);

  }
  handleDateClick( arg ) {
    alert('Bid on ' + arg.el.innerText + '?');
  }

}
