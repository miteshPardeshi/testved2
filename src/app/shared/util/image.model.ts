export class Image {
    constructor(
        public businessId?: string,
        public file?: string,
        public resourceId?: string,
        public galleryType?: string,
        public resourceType?: string,
        public primary?: boolean
    ) {
    }
}