import express from 'express';
import userRoutes from './user.route';

const router = express.Router();

router.get('/check', (req, res) => res.send('OK'));

router.use('/users', userRoutes);

export default router;
