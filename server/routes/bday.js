import express from 'express'
const router = express.Router();

import { createBday, getBday } from '../controllers/bday.js'
import auth from '../middleware/index.js'

router.post('/', auth, createBday)
router.get('/', auth, getBday)

export default router;