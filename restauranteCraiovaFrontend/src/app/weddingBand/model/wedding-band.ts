import {Observable} from 'rxjs';

export class WeddingBand {
 id: number;
 name: string;
 address: string;
 description: string;
 mail: string;
 phone: string;
 website: string;
  photos: Observable<any>;
}
