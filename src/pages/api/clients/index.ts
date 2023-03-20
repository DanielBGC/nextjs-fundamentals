import { randomUUID } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    res.status(405).send('');
  }

  res.status(200).json({
    id: randomUUID(),
    name: 'Daniel',
    email: 'daniel@email.com',
    method: req.method,
  });
}
