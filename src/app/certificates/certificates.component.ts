import { Component } from '@angular/core';
import { CertificatesService } from '../services/s-c/certificate.service';
import { Certificate } from '../models/certificates/certificates.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates: Certificate[] = [];

  constructor(public certificatesService: CertificatesService) {
    this.certificatesService.getCertificates().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ ...c.payload.doc.data() as Certificate })
        )
      )
    ).subscribe(data => {
      this.certificates = data;
      console.log(this.certificates);
    });
  }
}
