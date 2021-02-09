import {Observable} from 'rxjs';

export class Client {
  id: number;
  name: string;
  address: string;
  description: string;
  mail: string;
  phone: string;
  website: string;
  longitude: number;
  latidude: number;
  photos: Observable<any>;
}
