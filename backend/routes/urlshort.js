import { addUrl, redirectUrl, test } from '../controllers/url.controller.js';
import Routes from 'express';
const router = Routes()

router.get("/",test)

router.post("/url",addUrl)

router.get("/:shortId",redirectUrl)

export default router;