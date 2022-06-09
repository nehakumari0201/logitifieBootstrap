import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit, ElementRef, NgZone, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;
  @ViewChild('pickup', { static: false }) startLocation!: ElementRef;
  @ViewChild('drop', { static: false }) destination!: ElementRef;
 orginLat:any;
 originLng:any;
 destinationLat!:number;
 desitinationLng!:number;
  map!: google.maps.Map;
  lat = 40.73061;
  lng = -73.935242;
  constructor(private ngZone: NgZone) { }
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
  directionsRenderer = new google.maps.DirectionsRenderer();
  ngOnInit(): void { }
  ngAfterViewInit() {
    this.mapInitializer();
    this.googlePlaceAutoCompleteAttach();
    this.googlePlaceAutoCompleteAttach1();
  }
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }

  private googlePlaceAutoCompleteAttach(): void {
    let autocomplete =
      new google.maps.places.Autocomplete(this.startLocation.nativeElement, { types: ["(cities)"] });
    autocomplete.addListener("place_changed",
      () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          } else {
            console.log(place);
            this.orginLat = place.geometry.location.lat();
            this.originLng = place.geometry.location.lng()
            this.marker.setPosition(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
            this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
          }
        });
      });
  }
  private googlePlaceAutoCompleteAttach1(): void {
    let autocomplete =
      new google.maps.places.Autocomplete(this.destination.nativeElement, { types: ["(cities)"] });
    autocomplete.addListener("place_changed",
      () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          } else {
            console.log(place);
            this.destinationLat = place.geometry.location.lat();
            this.desitinationLng = place.geometry.location.lng()
            this.marker.setPosition(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
            this.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
          }
        });
      });
  }

  public calculateAndDisplayDistanceAndDuration() {

    let origin = new google.maps.Map(this.startLocation.nativeElement,
      this.mapOptions);
    console.log(origin);
    let destination = new google.maps.Map(this.destination.nativeElement,
      this.mapOptions);
    console.log(destination);

    let directionsService: google.maps.DirectionsService = new google.maps.DirectionsService();
    if (origin && destination) {
      let request: google.maps.DirectionsRequest = {
        origin: new google.maps.LatLng(this.orginLat,this.originLng),
        destination: new google.maps.LatLng(this.destinationLat,this.desitinationLng),
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      };
      directionsService.route(request, (response, status) => {
        if (status.toString() == "OK") {
          this.directionsRenderer.setDirections(response);
          this.directionsRenderer.setMap(this.map)
          let legs = response.routes[0].legs;

        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
      );
    }
  }

  }
// AIzaSyCDatZIjkR45gzDQL-YGB1b0Vm1krXAipk
