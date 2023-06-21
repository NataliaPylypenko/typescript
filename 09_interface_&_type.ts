// Interface & Type
interface User {  // именований тип обьекта, может наследоваться и расширяться другими интерфейсами
    name: string,
    age: number
}

// type User {  // механизм создания псевдонима для любого типа
//     name: string,
//     age: number
// }



// Interface optional property
interface User1 {
    name: string,
    age?: number,
}

const user1: User1 = {
    name: 'Natalia',
}



// Interface 'readonly' modifier
interface User2 {
    readonly name: string,
    age: number,
}

const user2: User2 = {
    name: 'Natalia',
    age: 31,
}

yauhen.age = 30;
yauhen.name = 'Anna'; // Cannot assign to 'name' because it is a read-only property



// Interface extension
interface User3 {
    name: string,
    age: number,
    [propName: string]: any;
}

const user3: User3 = {
    name: 'Natalia',
    age: 31,
    nickName: 'nata',
    justTest: 'test',
}



// Class Interface
interface User4 {
    name: string,
    age: number,
    getPass(): string,
}

class Natalia4 implements User4 {
    name: string = 'Natalia';
    age: number = 31;
    nickName: string = 'nata';

    getPass() {
        return `${this.name}${this.age}`;
    }
}



// Create Class based on multiple interfaces
interface User5 {
    name: string,
    age: number,
}

// Separate interface with one method
interface Pass5 {
    getPass(): string,
}

class Natalia5 implements User5, Pass5 {
    name: string = 'Natalia';
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}



// Interface extends
interface User6 {
    name: string,
    age: number,
}

// Interface extends
interface Admin6 extends User6 {
    getPass(): string,
}

class Natalia6 implements Admin6 {
    name: string = 'Natalia';
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}