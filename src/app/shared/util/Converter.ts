import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common';

@Injectable()
export class DateConverter {
    constructor(private datePipe: DatePipe) { }

    convertDate_slash(value: string): string {
        if (value != undefined && value != "") {
            return decodeURIComponent(this.datePipe.transform(value, 'MM-dd-yyyy'));
        } else {
            return "";
        }
    }

    convertTime_slash(value: string): string {
        if (value != undefined && value != "") {
            return decodeURIComponent(this.datePipe.transform(value, 'HH:mm'));
        } else {
            return "";
        }
    }

    convertString_time(value: string): Date {
        if (value != undefined && value != "") {
            let timeArr = value.split(':');
            let hour: number = +timeArr[0]
            let minutes: number = +timeArr[1]
            var date = new Date();
            date.setHours(hour);
            date.setMinutes(minutes);
            return date;
        } else {
            return null;
        }
    }
}