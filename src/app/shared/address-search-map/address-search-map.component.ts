import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'address-search-map',
  templateUrl: './address-search-map.component.html',
  styleUrls: ['./address-search-map.component.scss']
})
export class AddressSearchMapComponent implements OnInit, AfterViewInit {

  @Output() markedLocation = new EventEmitter();
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  latLng: any = { lat: 40.73, lng: -73.93 };
  map: google.maps.Map;
  coordinates;
  mapOptions: google.maps.MapOptions = {
    zoom: 14,
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
  geocoder = new google.maps.Geocoder();

  addressFromMarker: string;

  constructor() {

  }

  ngOnInit(): void {
    this.coordinates = new google.maps.LatLng(this.latLng.lat, this.latLng.lng);
    this.mapOptions = {
      ...this.mapOptions,
      center: this.coordinates
    };
    this.marker = new google.maps.Marker({
      position: this.coordinates
    });
  }

  resetMarker(coordinates) {
    this.marker.setMap(null);
    this.marker = new google.maps.Marker({
      position: coordinates
    });
    this.marker.setDraggable(true);
    google.maps.event.addListener(this.marker, 'dragend', ((ev) => {
      this.geocodePosition(this.marker.getPosition());
    }))
    this.marker.setMap(this.map);
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setDraggable(true);
    google.maps.event.addListener(this.marker, 'dragend', ((ev) => {
      this.geocodePosition(this.marker.getPosition());
    }))
    this.marker.setMap(this.map);
  }

  geocodePosition = (pos) => {
    this.geocoder.geocode({
      location: pos
    }, (responses) => {
      if (responses && responses.length > 0) {
        responses.map((address) => {
          if (address.types[0] == "route") {
            this.addressFromMarker = address.formatted_address;
            this.markedLocation.emit(this.addressFromMarker);
          }
        })
      } else {
        this.marker.formatted_address = 'Cannot determine address at this location.';
      }

    });
  }

  handleAddressChange(address: any) {
    this.coordinates = new google.maps.LatLng(address.geometry.location.lat(), address.geometry.location.lng());
    this.map.panTo(this.coordinates);
    this.resetMarker(this.coordinates);
    console.log(address);
    this.markedLocation.emit(address.name);
  }

}
