import { TestBed } from '@angular/core/testing';
import { CertificatesService } from './certificate.service'; // usa el nombre correcto

describe('CertificatesService', () => {
  let service: CertificatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
