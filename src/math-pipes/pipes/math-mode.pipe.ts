import { Pipe, PipeTransform } from "@angular/core";
/**
 * returns the mode of a array of numbers
 */
@Pipe({
    name: "mode"
})
export class MathModePipe implements PipeTransform {
    public transform(array: number[]): number[] {
        if (!Array.isArray(array) || isNaN(array[0])) {
            return array;
        }
        const modes = [];
        const count = [];
        let maxIndex = 0;

        for (const num of array) {
            count[num] = (count[num] || 0) + 1;
            if (count[num] > maxIndex) {
                maxIndex = count[num];
            }
        }

        for (const i in count) {
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }
        }
        return modes;
    }
}
