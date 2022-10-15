const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
