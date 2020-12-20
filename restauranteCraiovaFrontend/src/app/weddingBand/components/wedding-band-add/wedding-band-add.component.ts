import {Component, OnInit} from '@angular/core';
import {WeddingBand} from '../../model/wedding-band';
import {WeddingBandService} from '../../service/wedding-band.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';

import {HttpEventType, HttpResponse} from '@angular/common/http';
import {PhotoService} from '../../../photos/service/photo.service';

@Component({
  selector: 'app-wedding-band-add',
  templateUrl: './wedding-band-add.component.html',
  styleUrls: ['./wedding-band-add.component.css']
})
export class WeddingBandAddComponent implements OnInit {
  wedding: WeddingBand;
  weddings: WeddingBand[];
  selectedPhotos: FileList;
  progressInfos = [];
  currentPhoto: File;
  progress = 0;
  message = '';
  photos: Observable<any>;

  constructor(private weddingService: WeddingBandService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.wedding = new WeddingBand();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.router.navigate(['weddingList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.weddingService.save(this.wedding).subscribe(data => {
      this.getWeddingBand();
    });
  }

  // tslint:disable-next-line:typedef
  getWeddingBand() {
    this.weddingService.findAll().subscribe(result => {
      this.weddings = [];
      this.weddings = result;
      this.wedding = this.weddings[(this.weddings.length - 1)];
      console.log(this.wedding);
      this.uploadPhotos(this.wedding.id);
    });
    this.getAll();
  }

  selectPhoto(event): void {
    this.progressInfos = [];

    const files = event.target.files;
    let isImage = true;

    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedPhotos = event.target.files;
    } else {
      this.selectedPhotos = undefined;
      event.srcElement.percentage = null;
    }
  }
  uploadPhotos(id: number): void {
    this.message = '';

    for (let i = 0; i < this.selectedPhotos.length; i++) {
      this.upload(i, this.selectedPhotos[i], id);
    }
  }

  upload(idx, file, id: number): void {
    this.progressInfos[idx] = {value: 0, fileName: file.name};

    this.photoService.upload(file, id).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.photos = this.photoService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }
}
