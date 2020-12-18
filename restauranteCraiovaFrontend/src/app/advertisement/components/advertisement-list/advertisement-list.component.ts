import {Component, OnInit} from '@angular/core';
import {Advertisement} from '../../model/advertisement';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdvertisementService} from '../../service/advertisement.service';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {
  advertismentList: Advertisement[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private advertisementService: AdvertisementService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

// tslint:disable-next-line:typedef
  getAll() {
    this.advertisementService.findAll().subscribe(data => {
      this.advertismentList = [];
      this.advertismentList = data;
    });
  }

  // tslint:disable-next-line:typedef
  add() {
    this.router.navigate(['accomodationAdd']);
  }
}
