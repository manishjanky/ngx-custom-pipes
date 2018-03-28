import { ArrayUniquePipe } from './pipes/array-unique.pipe';
import { ArrayTrimPipe } from './pipes/array-trim.pipe';
import { ArraySumPipe } from './pipes/array-sum.pipe';
import { ArraySortByPipe } from './pipes/array-sort-by.pipe';
import { ArrayShufflePipe } from './pipes/array-shuffle.pipe';
import { ArrayRtrimPipe } from './pipes/array-rtrim.pipe';
import { ArrayReversePipe } from './pipes/array-reverse.pipe';
import { ArrayRangePipe } from './pipes/array-range.pipe';
import { ArrayOmitPipe } from './pipes/array-omit.pipe';
import { ArrayMinPipe } from './pipes/array-min.pipe';
import { ArrayMergePipe } from './pipes/array-merge.pipe';
import { ArrayMaxPipe } from './pipes/array-max.pipe';
import { ArrayLtrimPipe } from './pipes/array-ltrim.pipe';
import { ArrayLimitToPipe } from './pipes/array-limit-to.pipe';
import { ArrayFilterPipe } from './pipes/array-filter-by.pipe';
import { ArrayDupesPipe } from './pipes/array-dupes.pipe';
import { ArrayDiffPipe } from './pipes/array-diff.pipe';
import { ArrayContainsPipe } from './pipes/array-contains.pipe';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [ArrayContainsPipe, ArrayDiffPipe, ArrayDupesPipe, ArrayFilterPipe, ArrayLimitToPipe,
    ArrayLtrimPipe, ArrayMaxPipe, ArrayMergePipe, ArrayMinPipe, ArrayOmitPipe, ArrayRangePipe, ArrayUniquePipe,
    ArrayReversePipe, ArrayRtrimPipe, ArrayShufflePipe, ArraySortByPipe, ArraySumPipe, ArrayTrimPipe],
  imports: [],
  exports: [ArrayContainsPipe, ArrayDiffPipe, ArrayDupesPipe, ArrayFilterPipe, ArrayLimitToPipe,
    ArrayLtrimPipe, ArrayMaxPipe, ArrayMergePipe, ArrayMinPipe, ArrayOmitPipe, ArrayRangePipe, ArrayUniquePipe,
    ArrayReversePipe, ArrayRtrimPipe, ArrayShufflePipe, ArraySortByPipe, ArraySumPipe, ArrayTrimPipe],
  providers: [],
  bootstrap: []
})
export class ArrayPipesModule { }
