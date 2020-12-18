import { Component, OnInit } from '@angular/core';
import {PizzeriaService} from '../../service/pizzeria.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Restaurant} from '../../../restaurants/model/restaurant';
import {Pizzeria} from '../../model/pizzeria';

@Component({
  selector: 'app-pizzeria-add',
  templateUrl: './pizzeria-add.component.html',
  styleUrls: ['./pizzeria-add.component.css']
})
export class PizzeriaAddComponent implements OnInit {
 pizzeria: Pizzeria;
  constructor(private pizzeriaService: PizzeriaService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }
  ngOnInit(): void {
    this.pizzeria = new Restaurant();
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.pizzeriaService.save(this.pizzeria).subscribe(data => {
      this.router.navigate(['pizzeriaList']);
    });
  }
  // tslint:disable-next-line:typedef
  getAll(){
    this.router.navigate(['pizzeriaList']);
  }
}
