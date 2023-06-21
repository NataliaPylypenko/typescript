// Export data from Namespace
namespace Utils {
    export const SECRET: string = '123321';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;
}

// Calling exported from namespace methods
const myPass1 = Utils.getPass('Natalia', 34);
const isSecret1 = Utils.isEmpty(Utils.SECRET);

// Constant with the same name outside namespace
const PI = 3;


// Import/Export (ES6 Modules)
// File "Utils.ts"
export const SECRET: string = '123321';
export const getPass = (name: string, age: number): string => `${name}${age}`;

// File "Customers.ts"
import { getPass, SECRET } from "./Utils";

const myPass2 = getPass(SECRET, 31);