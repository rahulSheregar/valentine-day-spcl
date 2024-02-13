import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const filePath = path.join(process.cwd(), 'src/app/[id]/proposal.json'); 

    try {
      const existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      let lastIndex = 0;
      for (const key in existingData) {
        if (parseInt(key) > lastIndex) {
          lastIndex = parseInt(key);
        }
      }

      const newIndex = lastIndex + 1;
      existingData[newIndex] = data;

      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

      res.status(200).json({ message: 'Data appended to JSON file successfully' });
    } catch (error) {
      console.error('Error appending data to JSON file:', error);
      res.status(500).json({ message: 'Failed to append data to JSON file' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
