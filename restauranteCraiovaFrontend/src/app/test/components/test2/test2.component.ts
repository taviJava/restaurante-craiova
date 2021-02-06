import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import BingMaps from 'ol/source/BingMaps';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  styles = [
    'RoadOnDemand',
    'Aerial',
    'AerialWithLabelsOnDemand',
    'CanvasDark',
    'OrdnanceSurvey' ];
   layers = [];
 map: any;
 select = document.getElementById('layer-select');
  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      layers: [
        new TileLayer({
          target: 'map'
        })
      ],
      view: new View({
        center: [-6655.5402445057125, 6709968.258934638],
        zoom: 13,
      })
    });
  }

}
