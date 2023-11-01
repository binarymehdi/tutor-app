import { Router } from "express";
import { addSession } from "../controllers/sessions";
const router = Router();

router
    .route('/')
    .post(addSession);

export default router;