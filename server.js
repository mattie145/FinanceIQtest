const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve index.html for any route (Single Page App)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║     💸 Finance IQ Server Started      ║
╚════════════════════════════════════════╝

Open your browser and go to:
→ http://localhost:${PORT}

Press Ctrl+C to stop the server
  `);
});
