import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";

@Injectable()
@Pipe({ name: "dataFilter" })
export class DataFilterPipe implements PipeTransform {
    transform(value: Array<any>, args: any[]) {
        if (value != undefined) {
            return value.filter(item => {
                let count = 0;
                let match = true;
                for (var i = 0; i < args.length; i++) {
                    if (args[i][1] == undefined || args[i][1] == "") {
                        count = count + 1;
                        continue;
                    }
                    if (item[args[i][0]] != null && item[args[i][0]].toString().toLowerCase().indexOf(args[i][1].toString().toLowerCase()) >= 0) {
                        count = count + 1;
                        continue;
                    } else {
                        match = false;
                    }
                }
                if (count > 0) {
                    match = true;
                }
                return match;
            });
        }

    }
}

@Pipe({ name: "dataFilterScheduleRide", pure: false })
export class DataFilterPipeScheduleRide implements PipeTransform {
    transform(value: Array<any>, filter: any[]) {
        if (!filter) {
            console.log(value + '1');
            return value;

        } else if (value) {
            console.log(value + '2');
            return value.filter(item => {
                let displayCheckPassed = true;
                let riderFirstName = true;
                let routeName = true;
                let date = true;
                let time = true;
                let status = true;

                for (var i = 0; i < filter.length; i++) {
                    let valueOfColumn = item[filter[i][0]];
                    let filterValueForColumn = filter[i][1];

                    if (filterValueForColumn === null || filterValueForColumn === undefined || filterValueForColumn === "") {
                        continue;
                    }

                    if (valueOfColumn.toString().toLowerCase().indexOf(filterValueForColumn.toString().toLowerCase()) < 0) {
                        if (i == 0) {
                            riderFirstName = false;
                        } else if (i == 1) {
                            routeName = false;
                        }
                        else if (i == 2) {
                            date = false;
                        }
                        else if (i == 3) {
                            time = false;
                        }
                        else if (i == 4) {
                            status = false;
                        }
                        else {
                            displayCheckPassed = false;
                        }
                    }
                }
                if (displayCheckPassed && (riderFirstName || routeName || date || time || status)) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    }
}

@Pipe({ name: "dataFilterUser", pure: false })
export class DataFilterPipeUser implements PipeTransform {
    transform(value: Array<any>, filter: any[]) {
        if (filter["0"]["1"] == undefined || filter["0"]["1"] == "") {
            console.log(filter["0"]["1"]);
        }

        if (!filter) {
            return value;
        }
        else if (value) {
            return value.filter(item => {
                let displayCheckPassed = true;
                let firstName = true;
                //  let businessName = true;
                let email = true;

                for (var i = 0; i < filter.length; i++) {
                    let valueOfColumn = item[filter[i][0]];
                    let filterValueForColumn = filter[i][1];

                    if (filterValueForColumn === null || filterValueForColumn === undefined || filterValueForColumn === "") {
                        continue;
                    }

                    if (valueOfColumn.toString().toLowerCase().indexOf(filterValueForColumn.toString().toLowerCase()) < 0) {
                        if (i == 0) {
                            firstName = false;
                        }
                        // else if (i == 1) {
                        //     businessName = false;
                        // }
                        else if (i == 1) {
                            email = false;
                        }
                        else {
                            displayCheckPassed = false;
                        }
                    }
                }
                if (displayCheckPassed && (firstName || email)) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    }
}
@Pipe({
    name: 'phone', pure: false
})
export class PhonePipe {
    transform(val: any) {
        if (val) {
            val = val.charAt(0) != 0 ? '' + val : '' + val;
            let newStr = '';
            let i;
            for (i = 0; i < (Math.floor(val.length / 3) - 1); i++) {
                newStr = newStr + val.substr(i * 2, 3) + '-';
            }
            return newStr + val.substr(i * 3);
        }
    }
}