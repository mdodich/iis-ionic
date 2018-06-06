import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Position } from "../../models/position";
import { } from '@types/googlemaps';

@Injectable()
export class LocationProvider {
  private _defaultPosition: Position = {
    latitude: 43.074237,
    longitude: -89.381012
  };
  private geocoder = new google.maps.Geocoder();
  constructor(public http: HttpClient) {
    console.log("Hello LocationProvider Provider");
  }
  getCurrentPosition(): Promise<Position> {
    if ("geolocation" in navigator) {
      return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(p => resolve(p.coords));
      });
    } else {
      return Promise.resolve(this._defaultPosition);
    }
  }
  city(position: Position): Promise<string> {
    const latLng = new google.maps.LatLng(
      position.latitude,
      position.longitude
    );
    return new Promise((resolve, reject) => {
      this.geocoder.geocode({ location: latLng }, (results, status) => {
        if ("OK" === status.toString() && results[0]) {
          console.log(results);
          // The most general top-level locality has the most natural
          // formatted address. Addresses are in most specific to
          // most general order, so loop backwards.
          for (let i = results.length - 1; i >= 0; i--) {
            let r = results[i];
            if (r.types.indexOf("locality") > -1) {
              resolve(r.formatted_address);
              return; // Bail out
            }
          }
          // Assert: We didn't find a top level locality.
          // Return the long name associated with the first locality,
          // or if not found, use the formatted_address.
          let addresses = results[0].address_components;
          for (let i = 0; i < addresses.length; i++) {
            let address = addresses[i];
            if (address.types.indexOf("locality") > -1) {
              resolve(address.long_name);
              return; // Bail out
            }
          }
          // Assert: We didn't find a locality at all! Use the
          // most specific address's formatted address.
          resolve(results[0].formatted_address);
        } else {
          resolve("unknown location");
        }
      });
    });
  }
}