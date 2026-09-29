const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.APP_ENV || 'development';

app.get('/', (req, res) => {
  res.json({
    application: 'Secure Lab App',
    version: '1.0.0',
    environment
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Secure Lab App running on port ${port}`);
});
