import { Component, OnInit } from '@angular/core';
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
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pizzerias = [];
    this.pizzeriaService.findAll().subscribe(data => {
      this.pizzerias = [];
      this.pizzerias = data;
    });
  }
  // tslint:disable-next-line:typedef
  add(){
    this.router.navigate(['addPizzeria']);
  }

}
