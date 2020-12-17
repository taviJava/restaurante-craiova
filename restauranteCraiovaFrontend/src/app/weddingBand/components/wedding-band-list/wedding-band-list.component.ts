import { Component, OnInit } from '@angular/core';
import { WeddingBand } from '../../model/wedding-band';
import { WeddingBandService } from '../../service/wedding-band.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wedding-band-list',
  templateUrl: './wedding-band-list.component.html',
  styleUrls: ['./wedding-band-list.component.css']
})
export class WeddingBandListComponent implements OnInit {
  wedding: WeddingBand[];
  constructor(private weddingService: WeddingBandService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.wedding = [];
    this.weddingService.findAll().subscribe(data =>{
      this.wedding = [];
      this.wedding = data;
    })
  }

}
