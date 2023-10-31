import { Router } from "express";
import { getSessions } from "../controllers/sessions";
const router = Router();

router
    .route('/')
    .post(getSessions);

export default router;