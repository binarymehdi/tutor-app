import express from 'express';

const router = express.Router();

import {login, forgot, reset} from '../controllers/auth';

router.post('/login', login);
router.post('/forgot', forgot);
router.post('/reset/:token', reset);

export default router;