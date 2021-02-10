import {Component, OnInit} from '@angular/core';
import {WeddingBand} from '../../model/wedding-band';
import {WeddingBandService} from '../../service/wedding-band.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wedding-band-list',
  templateUrl: './wedding-band-list.component.html',
  styleUrls: ['./wedding-band-list.component.css']
})
export class WeddingBandListComponent implements OnInit {
  weddingBands: WeddingBand[] = [];

  constructor(private weddingService: WeddingBandService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getWeddingBand();
  }

  // tslint:disable-next-line:typedef
  add() {
    this.router.navigate(['addWeddingBand']);
  }

  // tslint:disable-next-line:typedef
  getWeddingBand() {
    this.weddingService.findAll().subscribe(data => {
      this.weddingBands = [];
      this.weddingBands = data;
      for (const weddingBand of this.weddingBands) {
        weddingBand.photos = this.weddingService.getWeddingBandphotos(weddingBand.id);
      }
    });
  }

  // tslint:disable-next-line:typedef
  viewWeddingBand(id: number) {
    this.router.navigate(['weddingBand/' + id]);
  }
}
