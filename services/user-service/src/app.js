const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app;