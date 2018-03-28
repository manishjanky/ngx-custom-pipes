import { MathSqrtPipe } from './pipes/math-sqrt.pipe';
import { MathRoundOffPipe } from './pipes/math-round-off.pipe';
import { MathRadiansPipe } from './pipes/math-radians.pipe';
import { MathPowPipe } from './pipes/math-pow.pipe';
import { MathPercentagePipe } from './pipes/math-percent.pipe';
import { MathModePipe } from './pipes/math-mode.pipe';
import { MathMedianPipe } from './pipes/math-median.pipe';
import { MathMeanPipe } from './pipes/math-mean.pipe';
import { MathFromBinaryPipe } from './pipes/math-from-binary.pipe';
import { MathFloorPipe } from './pipes/math-floor.pipe';
import { MathDegreesPipe } from './pipes/math-degrees.pipe';
import { MathCeilingPipe } from './pipes/math-ceil.pipe';
import { MathToBinaryPipe } from './pipes/math-to-binary.pipe';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [MathToBinaryPipe, MathCeilingPipe, MathDegreesPipe, MathFloorPipe, MathFromBinaryPipe,
    MathMeanPipe, MathMedianPipe, MathModePipe, MathPercentagePipe, MathPowPipe, MathRadiansPipe, MathRoundOffPipe,
    MathSqrtPipe, MathFromBinaryPipe],
  imports: [],
  exports: [MathToBinaryPipe, MathCeilingPipe, MathDegreesPipe, MathFloorPipe, MathFromBinaryPipe,
    MathMeanPipe, MathMedianPipe, MathModePipe, MathPercentagePipe, MathPowPipe, MathRadiansPipe, MathRoundOffPipe,
    MathSqrtPipe, MathFromBinaryPipe],
  providers: [],
  bootstrap: []
})
export class MathPipesModule { }
