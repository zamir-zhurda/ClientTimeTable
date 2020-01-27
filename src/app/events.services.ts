import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EventsService {
  constructor(private http: HttpClient) {}
  createAndStoreEvents(title: string, start: string, end: string) {}

  fetchEvents() {
    const urlAPI = "https://localhost:5001/api/events";
    return this.http.get(urlAPI);
  }
}
