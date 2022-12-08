function returnKeys<T extends Object>(arg: T){
    console.log(Object.keys(arg))
    return arg;
}

const a = returnKeys({
    abc: 'def'
})


interface APerson <T> {
    name: string,
    age: number,
    special: T
}

const John: APerson<string> = {
    special: 'Special property',
    name: 'John',
    age: 20
}

class Observable <T extends APerson<string>> {

    subscribe(arg: T) {
        console.log(`Subscribed to ${arg.name}`)
    }
}

new Observable().subscribe(John)