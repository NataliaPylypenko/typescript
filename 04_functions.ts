// Multiple argument types
const createPassword1 = (name: string, age: number | string) => `${name}${age}`;
createPassword1('Jack', 31);		// 'Jack31'
createPassword1('Jack', '31');	// 'Jack31'


// Default Arguments
const createPassword2 = (name: string = 'Max', age: number | string = 20) => `${name}${age}`;
createPassword2();		// "Max20"
createPassword2(null);	// Argument of type 'null' is not assignable to parameter of type 'string | undefined'


// Function with two required arguments
const createPassword3 = (name: string, age: number): string => `${name}${age}`;


// Function with optional argument 'age'
const createPassword4 = (name: string, age?: number) => `${name}${age}`;
createPassword4('Jack');	// 'An argument for 'age' was not provided.'


// Returned type is string
const createPassword5 = (name: string, age: number | string): string => `${name}${age}`;


// Returned type is number
const sum = (first: number, second: number): number => first + second;


// Returned type is object
const createEmptyObject = (): object => ({});


// REST type
const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skills are ${skills.join()}`;
createSkills('Jack', 'JS', 'ES6', 'React');	// "Jack, my skills are JS,ES6,React"


// Void type
// function doesn't return anything
const greetUser = (): void => {
    console.log("Hello, nice to see you!");
};


// Never type
// Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
};


// Function variable type
let myFunc;

function oldFunc(name: string):void {
    alert(`Hello ${name}, nice to see you!`);
};

myFunc = oldFunc;

// Function type description
let myFunc: (firstArg: string) => void;

// Describe function type with wrong return type
let myFunc: (firstArg: string) => number;


//
interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(42))
console.log('Two params: ', position(10, 15))