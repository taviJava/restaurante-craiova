import {Observable} from 'rxjs';

export class Restaurant {
  id: number;
  name: string;
  address: string;
  description: string;
  mail: string;
  phone: string;
  longitude: number;
  latidude: number;
  website: string;
  photos: Observable<any>;
}
