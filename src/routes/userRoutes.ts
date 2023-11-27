import express from 'express';
import { getAllUsers } from '../controllers/UserControllers';

const router = express.Router();

router.get('/all', getAllUsers);

export default router;