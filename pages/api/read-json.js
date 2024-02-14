import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  const { message_id } = req.body;
  console.log('i am here!');
  console.log(message_id);
  
  try {
    const result = await sql`
      SELECT * FROM Messages
      WHERE message_id = ${message_id};
    `;

    const rows = result.rows;
    
    if (rows.length > 0) {
      res.status(200).json({ success: true, message: 'Message retrieved successfully.', row: rows[0] });
    } else {
      res.status(404).json({ success: false, message: 'Message not found.' });
    }
  } catch (error) {
    console.error("Error retrieving message:", error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
}
