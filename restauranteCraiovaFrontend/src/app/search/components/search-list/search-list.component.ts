import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../model/client';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  clients: Client[];
  key: string;

  constructor(private clientService: ClientService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.key = this.route.snapshot.params.key;
    this.clients = [];
    this.getAll();
  }
  // tslint:disable-next-line:typedef
  getAll() {
    this.clientService.findAll(this.key).subscribe(data => {
      this.clients = [];
      this.clients = data;
      for (const cl of this.clients) {
        cl.photos = this.clientService.getClientPhotos(cl.id);
      }
    });
  }
  // tslint:disable-next-line:typedef
  viewRestaurant(id: number){
    this.router.navigate(['restaurant/' + id]);
  }

}
