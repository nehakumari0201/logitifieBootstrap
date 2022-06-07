import { Component, OnInit } from '@angular/core';
import { ViewChild,AfterViewInit, ElementRef,NgZone, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit ,AfterViewInit{
  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  map!: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;
  constructor() { }
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
    scaleControl: true
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    animation: google.maps.Animation.BOUNCE,
    draggable: true
  });
  ngOnInit(): void { }
  ngAfterViewInit() {
    this.mapInitializer();
  }
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }
}
// AIzaSyCDatZIjkR45gzDQL-YGB1b0Vm1krXAipk
