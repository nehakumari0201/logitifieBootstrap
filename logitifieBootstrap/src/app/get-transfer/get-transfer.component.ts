import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-get-transfer',
  templateUrl: './get-transfer.component.html',
  styleUrls: ['./get-transfer.component.css']
})
export class GetTransferComponent implements OnInit {
  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  @ViewChild('start', { static: false }) startposition!: ElementRef;
  @ViewChild('end', { static: false }) endposition!: ElementRef;
  map!: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;
  startLat!:number;
  startLng!:number;
  endLat!:number;
  endLng!:number;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
    scaleControl: true
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    // animation: google.maps.Animation.BOUNCE,
    draggable: true
  });
  directionsRenderer = new google.maps.DirectionsRenderer();
  constructor( private ngZone:NgZone) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.mapInitializer();
    this.googlePlaceAutoCompleteAttachToStart();
    this.googlePlaceAutoCompleteAttachToEnd();
  }
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }

  private googlePlaceAutoCompleteAttachToStart(): void {
    let autocomplete =
      new google.maps.places.Autocomplete(this.startposition.nativeElement, { types: ["(cities)"] });
    autocomplete.addListener("place_changed",
      () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          } else {
            console.log(place);
            this.startLat = place.geometry.location.lat();
            this.startLng = place.geometry.location.lng()
            this.marker.setPosition(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
            this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
          }
        });
      });
  }
  private googlePlaceAutoCompleteAttachToEnd(): void {
    let autocomplete =
      new google.maps.places.Autocomplete(this.endposition.nativeElement, { types: ["(cities)"] });
    autocomplete.addListener("place_changed",
      () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          } else {
            console.log(place);
            this.endLat = place.geometry.location.lat();
            this.endLng = place.geometry.location.lng()
            this.marker.setPosition(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
            this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
          }
        });
      });

  }

}
