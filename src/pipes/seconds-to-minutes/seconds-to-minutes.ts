import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "secondsToMinutes"
})
export class SecondsToMinutesPipe implements PipeTransform {
  /**
   * Converts raw seconds to "## minutes ## seconds"
   */
  transform(value: number, ...args) {
    return Math.floor(value/60) + ' minutes ' + (value % 60) + ' seconds';
  }
}