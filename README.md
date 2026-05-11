Useful commands and features:

# Run in watch mode (restarts on file changes)
node --watch app.js

# REPL
type 'node' in terminal
.exit or ctrl+d to exit

# CL argumemts
// args.js
console.log('All arguments:', process.argv);
console.log('First argument:', process.argv[2]);
console.log('Second argument:', process.argv[3]);

// Example usage:
// node args.js hello world
// Output:
// All arguments: ['/path/to/node', '/path/to/args.js', 'hello', 'world']
// First argument: hello
// Second argument: world

# Event loop
The event loop processes different types of callbacks in this order:

1. Timers: setTimeout, setInterval
2. I/O Callbacks: Completed I/O operations
3. Poll: Retrieve new I/O events
4. Check: setImmediate callbacks
5. Close: Cleanup callbacks (like socket.on('close'))

**PS** Between each phase, Node.js runs microtasks (Promises) and process.nextTick callbacks.

# Promises
// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation (e.g., API call, file read)
  setTimeout(() => {
    const success = Math.random() > 0.5;
    
    if (success) {
      resolve('Operation completed successfully');
    } else {
      reject(new Error('Operation failed'));
    }
  }, 1000); // Simulate delay
});

// Using the Promise
myPromise
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error.message));

# Async/ Await
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('myfile.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

readFile();
