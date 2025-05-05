import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Certificate } from '../../models/certificates/certificates.model'; // Asegúrate de que sea singular: Certificate

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  accesoCertificates = 'certificates service is running...';
  private dbPath = '/certificates';

  certificatesRef: AngularFirestoreCollection<Certificate>; // Tipo correcto

  constructor(private db: AngularFirestore) {
    this.certificatesRef = db.collection(this.dbPath);
  }

  getCertificates(): AngularFirestoreCollection<Certificate> {
    return this.certificatesRef;
  }
}
