import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import XyzSource from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

import {fromLonLat} from 'ol/proj';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-super-gallery/dist/angular-super-gallery.css';
import 'jquery';
import 'angular';
import 'bootstrap';
import 'angular-animate';
import 'angular-touch';
import 'screenfull';
import {Pizzeria} from '../../model/pizzeria';
import {PizzeriaService} from '../../service/pizzeria.service';
import {ImgObj} from '../../../restaurants/model/img-obj';

@Component({
  selector: 'app-view-pizzeria',
  templateUrl: './view-pizzeria.component.html',
  styleUrls: ['./view-pizzeria.component.css']
})
export class ViewPizzeriaComponent implements OnInit {
  imageObject: ImgObj[] = [];
  latitude;
  longitude ;
  map: Map;
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
  pizzeria: Pizzeria = new Pizzeria();
  id: number;
  photos: Observable<any>;

  constructor(private restService: PizzeriaService,
              private  route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.imageObject = [];
    this.id = this.route.snapshot.params.id;
    this.pizzeria = new Pizzeria();
    this.restService.getById(this.id).subscribe(result => {
      this.pizzeria = new Pizzeria();
      this.pizzeria = result;
      console.log(this.pizzeria.website);
      this.marker = new Feature({
        geometry: new Point(fromLonLat([this.pizzeria.longitude, this.pizzeria.latidude]))
      });
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

      // View and map
      this.view = new View({
        center: fromLonLat([this.pizzeria.longitude, this.pizzeria.latidude]),
        zoom: 10
      });

      this.map = new Map({
        target: 'map',
        layers: [this.tileLayer, this.vectorLayer],
        view: this.view
      });
    });
    this.photos = this.restService.getPizzeriaphotos(this.id);
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
