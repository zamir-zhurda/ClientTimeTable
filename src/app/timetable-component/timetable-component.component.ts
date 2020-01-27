import { Component, OnInit, Input } from "@angular/core";
import * as moment from "moment";
import { HttpClient } from "@angular/common/http";
declare var $: any;
import { EventsService } from "../events.services";
@Component({
  selector: "app-timetable-component",
  templateUrl: "./timetable-component.component.html",
  styleUrls: ["./timetable-component.component.css"]
})
export class TimetableComponentComponent implements OnInit {
  @Input()
  set configurations(config: any) {
    if (config) {
      this.defaultConfigurations = config;
    }
  }
  title = "easyfullcalendar";
  events: any = [];
  defaultConfigurations: any;

  constructor(private http: HttpClient, private eventsService: EventsService) {
    this.defaultConfigurations = {
      minTime: "08:00",
      maxTime: "20:00",
      weekends: false,
      editable: true,
      eventLimit: true,
      titleFormat: "MMM D YYYY",
      defaultView: "agendaWeek",
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay"
      },
      buttonText: {
        today: "Sot",
        month: "Muaji",
        week: "Java",
        day: "Dita"
      },
      views: {
        agenda: {
          eventLimit: 2
        }
      },
      allDaySlot: false,
      slotDuration: moment.duration("00:15:00"),
      slotLabelInterval: moment.duration("01:00:00"),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      events: this.events,
      monthNames: [
        "Janar",
        "Shkurt",
        "Mars",
        "Prill",
        "Maj",
        "Qershor",
        "Korrik",
        "Gusht",
        "Shtator",
        "Tetor",
        "Nentor",
        "Dhjetor"
      ],
      monthNamesShort: [
        "Janar",
        "Shkurt",
        "Mars",
        "Prill",
        "Maj",
        "Qershor",
        "Korrik",
        "Gusht",
        "Shtator",
        "Tetor",
        "Nentor",
        "Dhjetor"
      ],
      dayNames: [
        "E Diell",
        "E Hene",
        "E Marte",
        "E Merkure",
        "E Enjte",
        "E Premte",
        "E Shtune"
      ],
      dayNamesShort: [
        "E Diell",
        "E Hene",
        "E Marte",
        "E Merkure",
        "E Enjte",
        "E Premte",
        "E Shtune"
      ]

      // dayClick: (date, jsEvent, activeView) => {
      //   this.dayClick(date, jsEvent, activeView);
      // },

      // eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
      //   this.eventDragStart(timeSheetEntry, jsEvent, ui, activeView);
      // },

      // eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
      //   this.eventDragStop(timeSheetEntry, jsEvent, ui, activeView);
      // }
    };
  }

  getItems() {
    return this.eventsService.fetchEvents().subscribe(data => {
      ///first we check if data come from server is array and it is not null
      if (Array.isArray(data) && data.length) {
        for (let i = 0; i < data.length; i++) {
          ///we map data's properties into event's
          let event = { ...data[i] };
          event.start = moment(event.start);
          event.end = moment(event.end);
          this.events.push(event);
        }
      }

      // this.events = data;
      console.log("\n this.events: ", this.events);
      setTimeout(() => {
        $("#calendar").fullCalendar({
          defaultView: "agendaWeek",
          minTime: "08:00",
          maxTime: "20:00",
          weekends: false,
          buttonText: {
            today: "Sot",
            month: "Muaji",
            week: "Java",
            day: "Dita"
          },
          monthNames: [
            "Janar",
            "Shkurt",
            "Mars",
            "Prill",
            "Maj",
            "Qershor",
            "Korrik",
            "Gusht",
            "Shtator",
            "Tetor",
            "Nentor",
            "Dhjetor"
          ],
          monthNamesShort: [
            "Janar",
            "Shkurt",
            "Mars",
            "Prill",
            "Maj",
            "Qershor",
            "Korrik",
            "Gusht",
            "Shtator",
            "Tetor",
            "Nentor",
            "Dhjetor"
          ],
          dayNames: [
            "E Diell",
            "E Hene",
            "E Marte",
            "E Merkure",
            "E Enjte",
            "E Premte",
            "E Shtune"
          ],
          dayNamesShort: [
            "E Diell",
            "E Hene",
            "E Marte",
            "E Merkure",
            "E Enjte",
            "E Premte",
            "E Shtune"
          ],
          header: {
            left: "prev,next today",
            center: "title",
            right: "month,agendaWeek,agendaDay"
          },
          navLinks: true,
          editable: true,
          eventLimit: true,
          events: this.events, // request to load current events

          dayClick: (date, jsEvent, activeView) => {
            this.dayClick(date, jsEvent, activeView);
          },

          eventDragStart: (timeSheetEntry, jsEvent, ui, activeView) => {
            this.eventDragStart(timeSheetEntry, jsEvent, ui, activeView);
          },

          eventDragStop: (timeSheetEntry, jsEvent, ui, activeView) => {
            this.eventDragStop(timeSheetEntry, jsEvent, ui, activeView);
          },

          eventDrop: (event, dayDelta, minuteDelta) => {
            this.eventDropStopped(event, dayDelta, minuteDelta);
          }
        });
      }, 100);
    });
  }

  ngOnInit() {
    this.getItems();
  }

  dayClick(date, jsEvent, activeView) {
    console.log("\n day click: ", date);
  }
  eventDragStart(timeSheetEntry, jsEvent, ui, activeView) {
    console.log("\n event drag start: ", timeSheetEntry);
  }
  eventDragStop(timeSheetEntry, jsEvent, ui, activeView) {
    console.log("\n event drag end timeSheetEntry: ", timeSheetEntry);
    console.log("\n start: ", timeSheetEntry.start);
    console.log("\n end: ", timeSheetEntry.end);
  }

  eventDropStopped(event, dayDelta, minuteDelta) {
    var start = event.start;
    var end = event.end;
    console.log(
      "\n Event dropped start {0}: end: {1}",
      event.start._d,
      event.end._d
    );
  }
}
