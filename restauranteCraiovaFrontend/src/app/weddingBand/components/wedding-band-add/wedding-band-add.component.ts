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
  selectedPhotos: FileList;
  pozeLista: File[] = [];
  currentPhoto: File;
  progress = 0;
  message = '';
  photos: Observable<any>;
  selectedFiles: FileList;
  currentFile: File;
  progressInfos = [];
  // preview photo
  fileData: File = null;
  previewUrl: any = null;
  previewsUrl: any[] = [];

  constructor(private weddingService: WeddingBandService,
              private route: ActivatedRoute,
              private router: Router,
             ) {
  }

  ngOnInit(): void {
    this.wedding = new WeddingBand();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.router.navigate(['weddingBandList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.weddingService.save(this.wedding).subscribe(data => {
      this.uploadPhotos();
      setTimeout(() => {
          this.getAll();
        },
        5000);
    });
  }
  // tslint:disable-next-line:typedef
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.fileProgress(event);
  }

  // tslint:disable-next-line:typedef
  fileProgress(fileInput: any) {
    this.fileData = (fileInput.target.files[0] as File);
    this.preview();
  }

  // tslint:disable-next-line:typedef
  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }

  // tslint:disable-next-line:typedef
  onItemSelect(item: any) {
    console.log(item);
  }

  // tslint:disable-next-line:typedef
  onSelectAll(items: any) {
    console.log(items);
  }


  uploadPhotos(): void {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload2(i, this.selectedFiles[i]);
    }
  }

  upload2(idx, file): void {
    this.progressInfos[idx] = {value: 0, fileName: file.name};

    this.weddingService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.photos = this.weddingService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }

}
