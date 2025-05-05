import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Education {
  id?: string;
  degree: string;
  school: string;
  startDate: string;
  endDate?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private firestore: AngularFirestore) {}

  getEducation(): Observable<Education[]> {
    return this.firestore.collection<Education>('education').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Education;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  createEducation(education: Education): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('education').doc(id).set(education);
  }

  deleteEducation(id: string): Promise<void> {
    return this.firestore.collection('education').doc(id).delete();
  }
}
