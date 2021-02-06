import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import {Feature, geom, layer, olx, proj, source} from 'openlayers';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  latitude = -16.509418;
  longitude = -68.124151;
  map: any;

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new layer.Tile({
          source: new source.OSM()
        })
      ],
      view: new View({
        center: proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 12
      })
    });
    this.addPoint(this.latitude, this.longitude);
  }
  // tslint:disable-next-line:typedef
  setCenter() {
    const view = this.map.getView();
    view.setCenter(proj.fromLonLat([this.longitude, this.latitude]));
    view.addMarker(proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(12);
  }

  // tslint:disable-next-line:typedef
  addPoint(lat: number, lng: number) {
    const vectorLayer = new layer.Vector({
      source: new source.Vector({
        features: [new Feature({
          geometry: new geom.Point(proj.transform([lng, lat], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          src: 'assets/img/my-icon.png'
        })
      })
    });
    this.map.addLayer(vectorLayer);
  }
}
