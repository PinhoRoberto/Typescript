const productName: string = "Ventilador";
const unitPrice: number = 299.90;
const stockQuantity: number = 15;
const isAvailable: boolean = false;
const category: string = "Electric Appliance";

const totalStockValue: number = unitPrice * stockQuantity;

console.log("=== Product:", productName, "===");
console.log("Price: $" + unitPrice);
console.log("Stock:", stockQuantity, "units");
console.log("Total value: $" + totalStockValue);
console.log("Available:", isAvailable ? "Yes" : "No");
console.log("Category:", category);

 