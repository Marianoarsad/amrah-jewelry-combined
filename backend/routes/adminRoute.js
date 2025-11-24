import express from 'express';

import * as AdminContoller from '../controllers/AdminController.js';

const router = express.Router();

router.post('/login', AdminContoller.login);
router.post('/signup', AdminContoller.save);
console.log("Admin routes active");
export default router;