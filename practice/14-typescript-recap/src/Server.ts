import { Comp1 as someComponent } from './data/components/Comp1'
import { Comp1 } from '@components/Comp1'

function logInvocation(target: Object, propertyKey: string, descriptor: PropertyDescriptor){
    const className = target.constructor.name;
    let originalMethod = descriptor.value;
    descriptor.value = async function(...args: any[]) {
        console.log(`${className}#${propertyKey} called with ${JSON.stringify(args)}`)
        const result = await originalMethod.apply(this, args);
        console.log(`${className}#${propertyKey} returned ${JSON.stringify(result)}`)
    }
}

export interface IServer {
    startServer(): void
    stopServer(): void
}

class Server implements IServer {
    public port: number;
    public address: string;
    public comp1 = new someComponent();

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    async startServer() {
        const data = await this.getData(123);
        console.log(`Starting server at ${this.address}:${this.port}`)
    }

    stopServer(): void {
        console.log('stopping server')
    }

    @logInvocation
    async getData(id: number): Promise<string>{
        return 'some special data'
    }
}
const someServer: IServer = new Server(4000,'127.0.0.1');

someServer.startServer();