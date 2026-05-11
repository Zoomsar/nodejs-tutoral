async function myFunction() {
  return 'Hello';
}

// This returns a Promise that resolves to 'Hello', not the string 'Hello' directly
const result = myFunction();
console.log(result); // Promise { 'Hello' }

// You need to await it or use .then()
myFunction().then(message => console.log(message)); // Hello