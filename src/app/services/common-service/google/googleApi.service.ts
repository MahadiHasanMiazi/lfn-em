import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  constructor() { }
  getTimeZone(latitude: string, longitude: string): any {
    var result = null;
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/timezone/json?key=AIzaSyBJbfJEM7cENLUqYq3WNLaPziVcFKDLXgI&location=" + latitude + "," + longitude + "&timestamp=" + (Math.round((new Date().getTime()) / 1000)).toString(),
      cache: false,
      type: "POST",
      async: false,
    }).done(function (response) {
      if (response.timeZoneId != null) {
        result = response;
      }
    });
    return result;
  }
}
