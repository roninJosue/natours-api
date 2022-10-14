const app = require('./app');

const port = 3010;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
