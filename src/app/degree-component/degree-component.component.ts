import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { DegreesService } from "../degrees.services";
import { Degree } from "../models/degree.model";
@Component({
  selector: "app-degree-component",
  templateUrl: "./degree-component.component.html",
  styleUrls: ["./degree-component.component.css"]
})
export class DegreeComponentComponent implements OnInit {
  constructor(private degreesService: DegreesService) {}
  selectFormControl = new FormControl("", Validators.required);
  degrees: any = [];
  getItems() {
    this.degreesService.fetchDegrees().subscribe(data => {
      //console.log("from server: degrees: ", data);
      this.degrees = data;
    });
  }
  showValuePromptText(degree, selectedDegreeId) {
    console.log("selectedDegree: ", selectedDegreeId);
  }
  ngOnInit() {
    this.getItems();
  }
}
