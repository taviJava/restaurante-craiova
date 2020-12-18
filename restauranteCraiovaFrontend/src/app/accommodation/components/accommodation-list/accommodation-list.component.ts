import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AccommodationService} from '../../service/accommodation.service';
import {Accommodation} from '../../model/accommodation';

@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.css']
})
export class AccommodationListComponent implements OnInit {
  accomodationList: Accommodation [] = [];


  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private accomodationService: AccommodationService) {
  }

  ngOnInit(): void {
    this.getAccomodation();
  }

  // tslint:disable-next-line:typedef
  getAccomodation() {
    this.accomodationService.findAll().subscribe(data => {
      this.accomodationList = [];
      this.accomodationList = data;
    });
  }

  // tslint:disable-next-line:typedef
  add() {
    this.router.navigate(['accomodationAdd']);
  }
}
