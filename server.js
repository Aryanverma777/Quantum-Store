import express from 'express';
import mysql from 'mysql2/promise';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

async function fetchItems() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'Aryan',
    password: '7748',
    database: 'quantum'
  });

  try {
    const [rows] = await connection.execute('SELECT * FROM items');
    return rows;
  } finally {
    await connection.end();
  }
}

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'template.html'));
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await fetchItems();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});