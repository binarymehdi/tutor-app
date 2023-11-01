import { Request, Response } from "express";
import pool from "../../db/index";
// get a session

// get all sessions
const addSession = async (req: Request, res: Response) => {
    try {
        const { description } = req.body;
        const newSession = await pool.query(
            "INSERT INTO session (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newSession.rows[0]);
        return newSession;
    } catch (error) {
        console.error((error as Error).message);
    }
};

// update a session
const updateSession = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updatedSession = await pool.query(
            "UPDATE session SET description = $1 WHERE id = $2",
            [description, id]
        );
        res.json("Session was updated!");
        return updatedSession;
    } catch (error) {
        console.error((error as Error).message);
    }
};

// delete a session
const deleteSession = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedSession = await pool.query(
            "DELETE FROM session WHERE id = $1",
            [id]
        );
        res.json("Session was deleted!");
        return deletedSession;
    } catch (error) {
        console.error((error as Error).message);
    }
};
export {
    addSession,
    updateSession,
    deleteSession,
};

