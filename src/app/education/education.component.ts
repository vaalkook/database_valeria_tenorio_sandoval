import { Component } from "@angular/core";
import { EducationService } from "../services/s-e/education.service";
import { Education } from "../models/education/education.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"],
})
export class EducationComponent {
  educationList: Education[] = [];

  constructor(public educationService: EducationService) {
    console.log("Education service initialized");

    this.educationService
      .getEducation()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.id,
            ...c,
          }))
        )
      )
      .subscribe((data) => {
        this.educationList = data;
        console.log("Loaded education:", this.educationList);
      });
  }
}
