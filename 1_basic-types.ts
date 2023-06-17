// Boolean type
const isFetching: boolean = true
const isLoading: boolean = false


// Number type
const int: number = 42
const float: number = 4.2
const num: number = 3e10


// String type
let name = 'Natalia'
const message: string = 'Hello Typescript'
const sentence: string = `Hello, my name is ${ name }!`


// Null & Undefined types
const u: undefined = undefined
const n: null = null


// Void type
const greetUser = (): void => {
    alert('Hello? nice to see you!')
}

function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Хайзенберг')


// Array type
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: string[] = ['Hello', 'Typescript']


// Tuple type
let contact1: [string, number]
contact1 = ['Vladilen', 1234567]

const contact2: [string, number] = ['Vladilen', 1234567]


// Any type
let y: [any, any] = ['goodbuy', 42]
let z: Array<any> = [10, 'hello']

let variable: any = 42
variable = 'New String'
variable = []


// Enum type
enum Directions {
    Up,
    Down,
    Left,
    Right
}
Directions.Up;
Directions.Down;
Directions.Left;
Directions.Right;


// Never type
// function return Error
const message = 'Hello'
const error = (message: string): never => {
    throw new Error(message)
}

// function infinite loop
const infiniteLoop = (): never => {
    while (true) {}
}


// Object type
const create = (o: object | null): void => {}
create({ obj: 1 })


// Multiple types
let id: number | string
id = 10
id = '10'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'


// Type
type Login = string
const login: Login = 'admin'