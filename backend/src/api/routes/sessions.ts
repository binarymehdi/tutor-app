import { Router } from "express";
import { getSessions, addSession, updateSession, deleteSession } from "../controllers/sessions";
const router = Router();

router
    .route('/')
    .get(getSessions)
    .post(addSession);

router
    .route('/:id')
    .patch(updateSession)
    .delete(deleteSession);



export default router;