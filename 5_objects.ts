// Define object type
let user1: { name: string, age: number } = {
    name: 'Natalia',
    age: 30,
};


// Updating object type
let user2: { name: string, age: number, nickName: string } = {
    name: 'Natalia',
    age: 30,
    nickName: 'webDev',
};


// Using Type for objects structure
// Apply Person type for objects with the same structure
type Person3 = { name: string, age: number, nickName: string };

let user3: Person3 = {
    name: 'Natalia',
    age: 30,
    nickName: 'webDev',
};

let admin3: Person3 = {
    name: 'Max',
    age: 20,
    nickName: 'Mad',
};


// 2 object with almost the same structure
// Updating type with optional properties
type Person4 = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
};

let user4: Person4 = {
    name: 'Natalia',
    age: 30,
    nickName: 'webDev',
};

let admin4: Person4 = {
    name: 'Max',
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    },
};