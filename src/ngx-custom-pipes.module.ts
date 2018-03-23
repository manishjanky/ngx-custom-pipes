import { MathPipesModule } from './math-pipes/math-pipes.module';
import { NgModule } from "@angular/core";
import { ArrayPipesModule } from "./array-pipes";
import { StringPipesModule } from './string-pipes';

@NgModule({
  declarations: [],
  imports: [ArrayPipesModule, MathPipesModule, StringPipesModule],
  exports: [ArrayPipesModule, MathPipesModule, StringPipesModule]
})
export class CustomPipesModule { }
