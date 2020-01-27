import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DegreesService {
  constructor(private http: HttpClient) {}

  fetchDegrees() {
    const urlAPI = "https://localhost:5001/api/deget";
    return this.http.get(urlAPI);
  }
}
