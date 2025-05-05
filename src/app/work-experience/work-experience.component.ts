import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/services-w/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExperience: WorkExperience[] = [];

  constructor(private workExperienceService: WorkExperienceService) {
    this.workExperienceService
      .getWorkExperience()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data()
          }))
        )
      )
      .subscribe((data) => {
        this.workExperience = data;
        console.log(this.workExperience);
      });
  }
}
