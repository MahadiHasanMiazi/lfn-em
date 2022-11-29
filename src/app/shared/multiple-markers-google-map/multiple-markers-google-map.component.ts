import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AutoSearchParams} from "../../models/auto-search/auto-search-params";

@Component({
  selector: 'app-multiple-markers-google-map',
  templateUrl: './multiple-markers-google-map.component.html',
  styleUrls: ['./multiple-markers-google-map.component.scss']
})
export class MultipleMarkersGoogleMapComponent implements OnInit,  AfterViewInit, OnChanges {

  @Input() latLng: any;

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  coordinates;
  mapOptions: google.maps.MapOptions = {
    zoom: 12,
    styles: [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ],
    disableDefaultUI: true
  };
  marker: any;
  mapAutoSearch: AutoSearchParams;

  constructor() { }

  ngOnInit(): void {
    this.mapAutoSearch = {
      isDashboardMap: true
    }
  }

  initialMapView() {
    const coordinate = new google.maps.LatLng(this.latLng[0]?.lat, this.latLng[0]?.lng);
    this.mapOptions = {
      ...this.mapOptions,
      center: coordinate
    };
    this.marker = new google.maps.Marker({
      position: coordinate
    });
  }

  ngAfterViewInit() {
    this.initialMapView();
    this.mapInitializer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['latLng'].isFirstChange()) {
      this.mapInitializer();
    }
  }

  setMarker(coordinates: any) {
    const newMarker = new google.maps.Marker({
      position: coordinates,
      // label: 'test'
    });
    newMarker.setMap(this.map);
    this.map.panTo(coordinates);
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
    this.latLng.forEach((item: any) => {
      this.coordinates = new google.maps.LatLng(item.lat, item.lng);
      this.setMarker(this.coordinates)
    })
  }

  addressSelected(address: any) {
    this.latLng = [{ lat: address.geometry.location.lat(), lng: address.geometry.location.lng() }]
    this.initialMapView();
    this.mapInitializer()
  }

}
