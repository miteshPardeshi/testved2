export class Host {
    constructor(
        public id?: number,
        public hostname?: string,
        public loopback?: string
    ) {
    }
}

export class HostInterface {
    constructor(
        public id?: number,
        public hostInterface?: string,
        public interfaceIp?: string
    ) {
    }
}
export class HostInter{
    constructor(
        public hostId?: number,
        public hostInterfaces?:HostInterface
    ) {
    }
}

// export class hostInterfaceusers{
//     constructor(

//     ){}
// }

export class HostUser {
    constructor(
        public id?: number,
        public hostname?: string,
        public loopback?: string,
        public hostInterfaceusers?: HostInterfaceUser
    ) {
    }
}

export class HostInterfaceUser {
    constructor(
        public id?: number,
        public hostInterface?: string,
        public interfaceIp?: string
    ) {
    }
}