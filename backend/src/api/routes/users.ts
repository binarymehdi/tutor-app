import { Router } from "express";
import { getUsers, addUser, editUser, deleteUser } from "../controllers/users";

const router = Router();

router
    .route('/')
    .get(getUsers)
    .post(addUser);

router
    .route('/:id')
    .patch(editUser)
    .delete(deleteUser);

export default router;