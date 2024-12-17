const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // This error will be handled internally by Express and not logged to the console
    console.error('Error during request:', err);
    res.status(500).send('Internal Server Error');
  });
});

async function doSomethingAsync() {
  // Simulate a situation where a promise rejects due to an unexpected condition
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  // Simulate some asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});