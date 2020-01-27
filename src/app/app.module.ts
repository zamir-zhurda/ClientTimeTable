import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DegreeComponentComponent } from "./degree-component/degree-component.component";
import { TimetableComponentComponent } from "./timetable-component/timetable-component.component";

@NgModule({
  declarations: [
    AppComponent,
    DegreeComponentComponent,
    TimetableComponentComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
