import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IssTrackingDataProvider } from '../../providers/iss-tracking-data/iss-tracking-data';
import { } from '@types/googlemaps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

 // google: any;

  constructor(public navCtrl: NavController, private tracking:IssTrackingDataProvider) {

  }

  intervalId:number;

  ionViewDidEnter() {
    this.showLocation();
    setInterval(this.showLocation.bind(this), 3000);
  }
  
  ionViewDidLeave() {
    clearInterval(this.intervalId);
  }
  showLocation() {
    this.tracking.location().subscribe(x => {
      this.pan(x);
    });
  }

  ionViewDidLoad() {
    this.pan({ latitude: 43.074237, longitude: -89.381012 });
  }

  private _map: google.maps.Map;
  private _marker: google.maps.Marker;
  public pan(coordinate: { latitude; longitude }) {
    const ll: google.maps.LatLng = new google.maps.LatLng(
      coordinate.latitude,
      coordinate.longitude
    );

    // Lazily create the map and marker.
    this._map =
      this._map ||
      new google.maps.Map(document.getElementById("iss-tracking-map"), {
        center: ll,
        zoom: 4
      });
    this._marker =
      this._marker ||
      new google.maps.Marker({
        map: this._map,
        position: ll,
        icon: {
          url: "assets/imgs/iss.png",
          scaledSize: new google.maps.Size(20,20)//, 33)
        }
      });

      //this._map.panTo(ll);
      this._map.setCenter(ll);
      this._marker.setPosition(ll);
  }
}
