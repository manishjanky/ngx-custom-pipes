import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns abbreviated currency for large values. for eg
 * 1000 = 1.00K
 * 10000 = 10.00K
 */
@Pipe({
  name: "cuurencyAbbrev"
})
export class StringAbbrevCurrencyPipe implements PipeTransform {
  public transform(value: any, toFixed: number = 2, fullName: boolean = false) {
    // Alter numbers larger than 1k
    if (value.indexOf(",") > -1) {
      value = Number(value.split(",").join(""));
    }
    if (value >= 1e3) {
      const units = ["K", "M", "B", "T"];
      const fullUnits = ["Thousand", "Million", "Billion", "Trillion"];
      // Divide to get SI Unit engineering style numbers (1e3,1e6,1e9, etc)
      const unit = Math.floor(((value).toFixed(0).length - 1) / 3) * 3;
      // Calculate the remainder
      const rem = '1e' + unit;
      const num = (value / Number(rem)).toFixed(toFixed);
      let unitname = units[Math.floor(unit / 3) - 1];
      if (fullName) {
        unitname = fullUnits[Math.floor(unit / 3) - 1];
      }
      // output number remainder + unitname
      return num + unitname;
    }
    // return formatted original number
    return value.toLocaleString();
  }
}
