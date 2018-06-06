import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";
@Pipe({
  name: "todayOrTomorrow"
})
export class TodayOrTomorrowPipe implements PipeTransform {
  /**
   * Based on the difference between today and the specified
   * date, returns either "n days ago", "Yesterday", "Today",
   * or "In n days"
   */
  transform(value: Date, ...args) {
    // TODO: This won't work for dates that span end of year!
    let diff = this.julian(value) - this.julian(new Date());
    console.log(diff);
    if (diff < 0) {
      return diff === -1 ? "Yesterday" : `${-diff} days ago`;
    } else if (diff === 0) {
      return "Today";
    } else {
      return diff === 1 ? "Tomorrow" : `In ${diff} days`;
    }
  }
  private julian(date: Date) {
    // Some funky algorithm that returns the number of days from 
    // some epoch start date. Useful for determining the day of year.
    const d = date.getDate();
    const y = date.getFullYear();
    const m = date.getMonth() + 1;

    return Math.floor(1461 * (y + 4800 + (m - 14) / 12) / 4 + 367 * (m - 2 - 12 * ((m - 14) / 12)) / 12 - 3 * ((y + 4900 + (m - 14) / 12) / 100) / 4 + d - 32075);
  }
}