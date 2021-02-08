import {Component, OnInit} from '@angular/core';
import {Confectioner} from '../../model/confectioner';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfectionerService} from '../../service/confectioner.service';

@Component({
  selector: 'app-confectioner-list',
  templateUrl: './confectioner-list.component.html',
  styleUrls: ['./confectioner-list.component.css']
})
export class ConfectionerListComponent implements OnInit {
  confectionerList: Confectioner[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private confectionerService: ConfectionerService) {
  }

  ngOnInit(): void {
    this.confectionerList = [];
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.confectionerService.findAll().subscribe(data => {
      this.confectionerList = [];
      this.confectionerList = data;
      for (const confectioner of this.confectionerList) {
        confectioner.photos = this.confectionerService.getConfectionerphotos(confectioner.id);
      }
    });
  }

  // tslint:disable-next-line:typedef
  add() {
    this.router.navigate(['confectionerAdd']);
  }
}
