// Class types, including constructor
class User1 {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

const user1 = new User1('Natalia', 34, 'Nata');


// Class types modificators
class User2 {
    public name: string;
    private nickName: string;
    protected age: number;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

const user2 = new User2('Natalia', 34, 'Nata', 123456);


// Class default properties
class User3 {
    name: string;
    age: number = 34;
    nickName: string = 'Nata';

    constructor(name: string) {
        this.name = name;
    }

    getPass(): string {
        return `${this.nickName}${this.age}`;
    }
}

const user3 = new User3('Natalia');
user3.getPass(); // "Nata34"


// Minimization of Class properties
class User4 {
    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) {}
}


// Get access to private property
class User5 {
    private age: number = 34;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const user5 = new User('Natalia');
user5.setAge(30);	// 30
user5.myAge = 31;	// 31