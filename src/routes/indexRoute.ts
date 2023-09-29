import express from 'express';
import { getItem, createItem, getItemByName } from '../controllers/indexController';

const router = express.Router();

router.get('/', getItem);
router.get('/:item', getItemByName)
router.post('/', createItem);

export default router;
