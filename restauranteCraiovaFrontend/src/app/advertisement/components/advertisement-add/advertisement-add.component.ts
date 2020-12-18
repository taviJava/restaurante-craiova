import {Component, OnInit} from '@angular/core';
import {Advertisement} from '../../model/advertisement';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdvertisementService} from '../../service/advertisement.service';

@Component({
  selector: 'app-advertisement-add',
  templateUrl: './advertisement-add.component.html',
  styleUrls: ['./advertisement-add.component.css']
})
export class AdvertisementAddComponent implements OnInit {
  advertisement: Advertisement = new Advertisement();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private adevertisementService: AdvertisementService) {
  }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
  getAll() {
    this.router.navigate(['accomodationList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.adevertisementService.save(this.advertisement).subscribe(this.getAll);
  }
}
