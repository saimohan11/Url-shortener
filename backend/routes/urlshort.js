import { test } from '../controllers/url.controller.js';
import Routes from 'express';
const router = Routes()

router.get("/",test)



export default router;