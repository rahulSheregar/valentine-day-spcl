import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  const { sender, recipient, message } = req.body;
  console.log(sender, recipient, message);
  
  try {
    const result = await sql`
      INSERT INTO Messages (sender, receiver, message)
      VALUES (${sender}, ${recipient}, ${message})
      RETURNING *;
    `;

    const rows = result.rows;
    
    if (rows.length > 0) {
      res.status(200).json({ success: true, insertedRows: rows[0].message_id, rows: rows });
    } else {
      res.status(500).json({ success: false, message: 'Failed to insert message.' });
    }
  } catch (error) {
    console.error("Error inserting message:", error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
}
