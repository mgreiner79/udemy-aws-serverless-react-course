import { v4 } from 'uuid';

const myVar: string = "hello"
const myVar1: string = "hi"

async function handler( event: any, context: any) {
    return {
        statusCode: 200,
        body: 'Hello from Lambda! ' + v4()
    }
}

export { handler }