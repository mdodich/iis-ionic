import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Astronaut } from "../../models/astronaut";
import { IssTrackingDataProvider } from "../../providers/iss-tracking-data/iss-tracking-data";

@Component({
  selector: "page-astronauts",
  templateUrl: "astronauts.html"
})
export class AstronautsPage {
  constructor(
    public navCtrl: NavController,
    private tracking: IssTrackingDataProvider
  ) {}

  astronauts: Astronaut[];

  ionViewDidLoad() {
    this.tracking.astronauts().subscribe(data => (this.astronauts = data));
  }

  ionViewDidEnter() {
    console.log("astronauts ionViewDidEnter");
  }
}