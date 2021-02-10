import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WeddingBand} from '../../model/wedding-band';
import {ActivatedRoute} from '@angular/router';
import {WeddingBandService} from '../../service/wedding-band.service';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View';
import Feature from 'ol/Feature';
import XyzSource from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import {ImgObj} from '../../../restaurants/model/img-obj';

@Component({
  selector: 'app-view-wedding-band',
  templateUrl: './view-wedding-band.component.html',
  styleUrls: ['./view-wedding-band.component.css']
})
export class ViewWeddingBandComponent implements OnInit {
  imageObject: ImgObj[] = [];
  vectorSource: VectorSource;
  vectorLayer: VectorLayer;
  xyzSource: XyzSource;
  tileLayer: TileLayer;
  view: View;
  marker: Feature;
  iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 0.5],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: 'assets/map/mapSymbol.PNG',
    }),
  });
  weddingBand: WeddingBand = new WeddingBand();
  id: number;
  photos: Observable<any>;

  constructor(private bandService: WeddingBandService,
              private  route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.imageObject = [];
    this.id = this.route.snapshot.params.id;
    this.weddingBand = new WeddingBand();
    this.bandService.getById(this.id).subscribe(result => {
      this.weddingBand = new WeddingBand();
      this.weddingBand = result;
      console.log(this.weddingBand.website);
      this.marker.setStyle(this.iconStyle);

      this.vectorSource = new VectorSource({
        features: [this.marker]
      });

      this.vectorLayer = new VectorLayer({
        source: this.vectorSource
      });

      // XYZ
      this.xyzSource = new XyzSource({
        url: 'http://tile.osm.org/{z}/{x}/{y}.png'
      });

      this.tileLayer = new TileLayer({
        source: this.xyzSource
      });
    });
    this.photos = this.bandService.getWeddingBandphotos(this.id);
    this.photos.subscribe(result => {
      for (const photo of result) {
        const img: ImgObj = new ImgObj();
        img.image = photo.url;
        img.thumbImage = photo.url;
        img.title = photo.name;
        img.alt = 'Image alt';
        this.imageObject.push(img);
      }
    });
  }

}
