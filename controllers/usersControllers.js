import User from '../models/User';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  res.send({
    token: jwt.sign(
      {
        id: req.user.id
      },
      'saskanariy'
    )
  });
};
