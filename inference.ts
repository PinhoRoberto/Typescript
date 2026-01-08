export {};
//Annotation
const userName: string =  'Roberto';
const userAge: number = 48;
const isStudent: boolean = true;

//Inference
const productName =  'Keyboard'; 
const price = 149.90;
const inStock = true ;
const items = ["apple", "banana"];
const total = 10+5;
const message = `Hello ${userName}`

//Function
function greet(name: string): string{
    return `Hello ${name}`
}

console.log("=== Type Inference Demo ===");
console.log(greet(userName));
console.log("Product:", productName, "- Price:", price);
console.log("Items:", items);

