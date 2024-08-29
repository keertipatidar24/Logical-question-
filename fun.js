const prompt = require("prompt-sync")();

function findGeometricProgression(sum, product) {
    const sumOfTerms = sum;
    const productOfTerms = product;
    
    for (let possibleR = 0.1; possibleR < 10; possibleR += 0.001) {
        let possibleA = Math.pow(productOfTerms / Math.pow(possibleR, 6), 1 / 4);
        
        let calculatedSum = possibleA * (1 + possibleR + Math.pow(possibleR, 2) + Math.pow(possibleR, 3));
        
        if (Math.abs(calculatedSum - sumOfTerms) < 1e-5) {
            return { a: possibleA, r: possibleR };
        }
    }
    
    return null;
}

const sum = 20;
const product = 16;

const result = findGeometricProgression(sum, product);

if (result) {
    const { a, r } = result;
    console.log(`First term is a: ${a}`);
    console.log(`Common ratio is r: ${r}`);
} else {
    console.log("No solution found.");
}
