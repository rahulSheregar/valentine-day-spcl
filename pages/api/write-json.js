import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sender, recipient, message } = req.body;
    try {
      const client = await pool.connect();
      const query = 'INSERT INTO Messages (sender, receiver, message) VALUES ($1, $2, $3) RETURNING *';
      const values = [sender, recipient, message];

      const result = await client.query(query, values);
      client.release();

      res.status(200).json({ message: 'Data inserted into Messages table successfully', insertedData: result.rows[0] });
    } catch (error) {
      console.error('Error inserting data into Messages table:', error);
      res.status(500).json({ message: 'Failed to insert data into Messages table' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
