import { NgModule } from '@angular/core';
import { TodayOrTomorrowPipe } from './today-or-tomorrow/today-or-tomorrow';
import { SecondsToMinutesPipe } from './seconds-to-minutes/seconds-to-minutes';
@NgModule({
	declarations: [TodayOrTomorrowPipe,
    SecondsToMinutesPipe],
	imports: [],
	exports: [TodayOrTomorrowPipe,
    SecondsToMinutesPipe]
})
export class PipesModule {}
