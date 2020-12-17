import {Component, OnInit} from '@angular/core';
import {Accommodation} from '../../model/accommodation';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AccommodationService} from '../../service/accommodation.service';

@Component({
  selector: 'app-accommodation-add',
  templateUrl: './accommodation-add.component.html',
  styleUrls: ['./accommodation-add.component.css']
})
export class AccommodationAddComponent implements OnInit {
  accommodation: Accommodation = new Accommodation();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private accomodationService: AccommodationService) {
  }

  ngOnInit(): void {
    this.accommodation = new Accommodation();


  }

// tslint:disable-next-line:typedef
  getAccommodation() {
    this.router.navigate(['accomodationList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.accomodationService.save(this.accommodation).subscribe(this.getAccommodation);
  }
}
