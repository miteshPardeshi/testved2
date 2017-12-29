import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

import { AppConfig } from '../../app.config';

import { Image } from './image.model';
import { DataUtils } from './DataUtils';

export class ImageUpload {
    imagemodel: Image;
    response: Response;

    constructor(private http: Http, private dataUtils: DataUtils) {
        this.imagemodel = new Image();
    }

    uploadFile(event, businessId, resourceId, isPrimary, galleryType, resourceType, callback) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.dataUtils.toBase64(file, function () {
                this.imagemodel.businessId = businessId;
                this.imagemodel.file = this;
                this.imagemodel.galleryType = galleryType;
                this.imagemodel.resourceId = resourceId;
                this.imagemodel.resourceType = resourceType;
                this.imagemodel.primary = isPrimary;
            });
        }
    }
}