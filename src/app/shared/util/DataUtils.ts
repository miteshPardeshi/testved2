import { Injectable } from '@angular/core';

@Injectable()
export class DataUtils {
    toBase64(file: File, callback) {
        var reader: FileReader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {
            var base64 = reader.result.split(',')[1];
            callback.apply(base64);
        }
    }
}