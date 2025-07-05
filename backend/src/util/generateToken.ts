require('dotenv').config();
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

export const generateToken = (id: number) => {
  const token = jwt.sign(
    {
      id: id,
    },
    secretKey!,
    { expiresIn: '1h' }
  );
};
