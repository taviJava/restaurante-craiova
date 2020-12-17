import { Component, OnInit } from '@angular/core';
import {WeddingBand} from '../../model/wedding-band';
import {WeddingBandService} from '../../service/wedding-band.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wedding-band-add',
  templateUrl: './wedding-band-add.component.html',
  styleUrls: ['./wedding-band-add.component.css']
})
export class WeddingBandAddComponent implements OnInit {
  wedding: WeddingBand;
  constructor(private weddingService: WeddingBandService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.wedding = new WeddingBand();
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.weddingService.save(this.wedding).subscribe(data => {
      this.router.navigate(['weddingList']);
    });
  }
  // tslint:disable-next-line:typedef
  getAll(){
    this.router.navigate(['weddingList']);
  }

}
