import { StringUcwordsFirstPipe } from './pipes/string-ucwords-first.pipe';
import { StringUcfirstPipe } from './pipes/string-ucfirst.pipe';
import { StringTrimPipe } from './pipes/string-trim.pipe';
import { StringRtrimPipe } from './pipes/string-rtrim.pipe';
import { StringReversePipe } from './pipes/string-reverse.pipe';
import { StringReplaceLastPipe } from './pipes/string-replace-last.pipe';
import { StringReplaceFirstPipe } from './pipes/string-replace-first.pipe';
import { StringRepeatPipe } from './pipes/string-repeat.pipe';
import { StringProfileName } from './pipes/string-profile-name.pipe';
import { StringCamelCasePipe } from './pipes/string-camel-case.pipe';
import { StringAbbrevCurrencyPipe } from './pipes/string-abbrev-currency.pipe';
import { StringLtrimPipe } from './pipes/string-ltrim.pipe';
import { StringPadEndPipe } from './pipes/string-pad-end.pipe';
import { StringPadStartPipe } from './pipes/string-pad-start.pipe';
import { StringReplacePipe } from './pipes/string-replace.pipe';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [StringAbbrevCurrencyPipe, StringCamelCasePipe, StringLtrimPipe, StringPadEndPipe, StringPadStartPipe,
    StringProfileName, StringRepeatPipe, StringReplaceFirstPipe, StringReplaceLastPipe, StringReplacePipe,
    StringReversePipe, StringRtrimPipe, StringTrimPipe, StringUcfirstPipe, StringUcwordsFirstPipe],
  imports: [],
  exports: [StringAbbrevCurrencyPipe, StringCamelCasePipe, StringLtrimPipe, StringPadEndPipe, StringPadStartPipe,
    StringProfileName, StringRepeatPipe, StringReplaceFirstPipe, StringReplaceLastPipe, StringReplacePipe,
    StringReversePipe, StringRtrimPipe, StringTrimPipe, StringUcfirstPipe, StringUcwordsFirstPipe],
  providers: [],
  bootstrap: []
})
export class StringPipesModule { }
