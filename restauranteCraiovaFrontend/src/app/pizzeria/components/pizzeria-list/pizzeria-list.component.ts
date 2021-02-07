import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../../../restaurants/model/restaurant';
import {RestaurantService} from '../../../restaurants/service/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Pizzeria} from '../../model/pizzeria';
import {PizzeriaService} from '../../service/pizzeria.service';

@Component({
  selector: 'app-pizzeria-list',
  templateUrl: './pizzeria-list.component.html',
  styleUrls: ['./pizzeria-list.component.css']
})
export class PizzeriaListComponent implements OnInit {
  pizzerias: Pizzeria[];

  constructor(private pizzeriaService: PizzeriaService,
              private route: ActivatedRoute,
              private router: Router,
            ) {
  }

  ngOnInit(): void {
    this.pizzerias = [];
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  add() {
    this.router.navigate(['addPizzeria']);
  }
  // tslint:disable-next-line:typedef
  getAll() {
    this.pizzeriaService.findAll().subscribe(data => {
      this.pizzerias = [];
      this.pizzerias = data;
      for (const pizza of this.pizzerias) {
        pizza.photos = this.pizzeriaService.getPizzeriaphotos(pizza.id);
      }
    });
  }
}
