import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { WorkExperienceService } from './workexperience.service';
import { of } from 'rxjs';

const AngularFirestoreStub = {
  collection: (name: string) => ({
    snapshotChanges: () => of([])
  })
};

describe('WorkExperienceService', () => {
  let service: WorkExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorkExperienceService,
        { provide: AngularFirestore, useValue: AngularFirestoreStub }
      ]
    });
    service = TestBed.inject(WorkExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get work experience data', () => {
    service.getWorkExperience().snapshotChanges().subscribe(data => {
      expect(data).toEqual([]); 
    });
  });
});
