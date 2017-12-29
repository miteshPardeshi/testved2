export class Host {
    constructor(
        public id?: number,
        public hostname?: string,
        public loopback?: number
    ) {
    }
}


export class HostInterface {
    constructor(
        public id?: number,
        public hostId?: number,
        public hostInterface?: string,
        public interfaceIp?: number
    ) {
    }
}