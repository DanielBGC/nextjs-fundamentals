import { randomUUID } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req?.query;

  res.status(200).json({
    id: query?.id,
    name: 'Daniel',
    email: 'daniel@email.com',
    random: randomUUID(),
    method: req.method,
  });
}
