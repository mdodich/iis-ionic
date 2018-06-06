import { Component } from "@angular/core";
import { NavController, LoadingController, Loading } from "ionic-angular";
import { IssTrackingDataProvider } from "../../providers/iss-tracking-data/iss-tracking-data";
import { Pass } from "../../models/pass";
import { LocationProvider } from "../../providers/location/location"

@Component({
  selector: "page-passes",
  templateUrl: "passes.html"
})
export class PassesPage {
  passes: Pass[];
  location: string;
  constructor(
    private navCtrl: NavController,
    private tracking: IssTrackingDataProvider,
    public locationProvider: LocationProvider,
    private loadingController: LoadingController
  ) {}
  // ionViewDidEnter() {
  //   this.locationProvider.getCurrentPosition()
  //     .then(location =>
  //       this.tracking.passes(location).subscribe(data => (this.passes = data))
  //     )
  // }
  async ionViewDidEnter() {
    const loading = this.loadingController.create({
      spinner: "crescent",
      content: "Determining location and loading passes."
    });
    loading.present();
    const position = await this.locationProvider.getCurrentPosition();
    this.location = await this.locationProvider.city(position);
    this.tracking.passes(position).subscribe(data => {
      this.passes = data;
      loading.dismiss();
    });
  }
}
