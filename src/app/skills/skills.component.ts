// src/app/components/skills.component.ts
import { Component } from '@angular/core';
import { SkillsService } from '../services/service-s/skills.service';
import { skills } from '../models/skills/skills.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: skills[] = [];

  constructor(public skillsService: SkillsService) {
    this.skillsService
      .getSkills()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.skills = data;
        console.log(this.skills);
      });
  }
  getSkillBarWidth(level: string | undefined): string {
    switch (level?.toLowerCase()) {
      case 'basic':
        return '50%';
      case 'intermediate':
        return '70%';
      case 'intermediate-high':
      case 'intermedio-alto':
        return '80%';
      case 'advanced':
        return '90%';
      default:
        return '60%'; // valor por defecto
    }
  }
}
