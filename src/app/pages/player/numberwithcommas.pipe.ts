import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberWithCommas' })
export class NumberWithCommasPipe implements PipeTransform {
    transform(value: number): string {
        return value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }
}