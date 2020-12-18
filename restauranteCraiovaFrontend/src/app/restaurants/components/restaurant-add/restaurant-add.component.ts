import { Component, OnInit } from '@angular/core';
import {WeddingBand} from '../../../weddingBand/model/wedding-band';
import {WeddingBandService} from '../../../weddingBand/service/wedding-band.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Restaurant} from '../../model/restaurant';
import {RestaurantService} from '../../service/restaurant.service';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent implements OnInit {
  restaurant: Restaurant;
  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.restaurant = new Restaurant();
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.restaurantService.save(this.restaurant).subscribe(data => {
      this.router.navigate(['restaurantList']);
    });
  }
  // tslint:disable-next-line:typedef
  getAll(){
    this.router.navigate(['weddingList']);
  }
}
