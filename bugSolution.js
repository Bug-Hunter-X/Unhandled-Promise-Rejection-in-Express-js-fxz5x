const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Error during request:', err);
      res.status(500).send('Internal Server Error');
    });
});

async function doSomethingAsync() {
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});