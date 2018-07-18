import express from 'express';
import passport from '../config/passport';

import { login } from '../controllers/usersControllers';

const router = express.Router();

router.get(
  '/login',
  passport.authenticate('googleToken', { session: false }),
  login
);
router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send(req.user);
  }
);
export default router;
