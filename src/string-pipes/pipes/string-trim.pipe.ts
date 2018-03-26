import { Pipe, PipeTransform } from '@angular/core';
/**
 * trims the trims of specified characters from start and end
 */
@Pipe({
  name: "trim"
})
export class StringTrimPipe implements PipeTransform {
  public transform(value: string, chars?: string) {
    if (!chars || chars.length === 0) {
      return value.trim();
    }
    const re = new RegExp("^[" + chars + "]+|[" + chars + "]+$", "g");
    return value.replace(re, "").trim();
  }
}
