// Example of call static property
User1.secret

// Call static property in class method
class User1 {
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User1.secret}`;
    }
}

const user1 = new User1('Natalia', 34);
user1.getPass();


// Class example
class User2 {
    private nickName: string = 'webDev';
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User2.secret}`;
    }
}


// Inheritance example
class Natalia extends User2 {
    name: string = 'Natalia';

    constructor(age: number) {
        super(name, age);
    }
}

// Create instances based on 'User' and 'Yauhen' classes
const den = new User2('Den', 20);
const sem = new Natalia(31);	// Expected 2 arguments, but got 1


// Abstract class example
abstract class User3 {
    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;   // Abstract method
}

// Create class using Abstraction
class Natalia extends User3 {
    name: string = 'Natalia';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}`;
    }
}
const natalia = new Natalia(34);

// Call prototype method
natalia.greet();		// "Natalia"
// Call personal method
natalia.getPass();	// "34Natalia"