// Using of generic type
const getter1 = <T>(data: T): T => data;

function getter1<T>(data: T): T {
    return data;
}


// Defining issue immediately
const getter2 = <T>(data: T): T => data;

getter2(10).length;        // Property 'length' does not exist on type '10'
getter2('test').length;    // 4


// Generic behavior explanation
// Function arguments type
const getter3 = <T>(data: T): T => data;

// Define type in function calling
getter3<number>(10).length;		  // Property 'length' does not exist on type '10'
getter3<string>('test').length;	// 4


// Multiple generic types
class User1<T, K> {
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

const nata = new User1('Natalia', '31');
const anna = new User1(123, 321);
const mia = new User1('Mia', 22);

nata.getPass();
anna.getPass();
mia.getPass();


// Specify generic type 'K' with key-word 'extends'
class User2<T, K extends number> {
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

    public getSecret(): number {
        return this.age**2;
    }
}

const nata = new User2('Natalia', 31);
const anna = new User2(123, 321);



const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'Mia']


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
