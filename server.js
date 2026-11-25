// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Use proper path (forward slashes or escaped backslashes)
const templatesPath = path.resolve('C:/Users/skawa/OneDrive/Desktop/justaid/doc_for_template');

// Optional: check if folder exists
if (!fs.existsSync(templatesPath)) {
    console.error(`❌ Directory does not exist: ${templatesPath}`);
    process.exit(1);
}

// Serve static files
app.use('/templates', express.static(templatesPath));

// Endpoint to list files
app.get('/api/templates', (req, res) => {
    fs.readdir(templatesPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            res.status(500).json({ error: 'Unable to read template directory' });
            return;
        }

        const templates = files.map(file => ({
            name: path.parse(file).name,
            filePath: `/templates/${file}`
        }));

        res.json(templates);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${templatesPath}`);
});
