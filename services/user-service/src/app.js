const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


module.exports = { app, server };