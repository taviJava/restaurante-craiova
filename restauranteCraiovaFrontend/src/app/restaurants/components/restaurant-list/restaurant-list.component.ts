import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Restaurant} from '../../model/restaurant';
import {RestaurantService} from '../../service/restaurant.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  photos: Observable<any>;
  p = 0;
  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.restaurants = [];
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.restaurantService.findAll().subscribe(result => {
      this.restaurants = [];
      this.restaurants = result;
      for (const rest of this.restaurants) {
        rest.photos = this.restaurantService.getRestaurantphotos(rest.id);
      }
    });
  }

  // tslint:disable-next-line:typedef
  add() {
    this.router.navigate(['addRestaurant']);
  }

  // tslint:disable-next-line:typedef
  viewRestaurant(id: number) {
    this.router.navigate(['restaurant/' + id]);
  }
}
