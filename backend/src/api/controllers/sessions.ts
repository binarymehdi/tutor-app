import { Request, Response } from "express";
import pool from "../../db/index";
// get a session

// get all sessions
const getSessions = async (req: Request, res: Response) => {
    try {
        const allSessions = await pool.query("SELECT * FROM session");
        res.json(allSessions.rows);
        return allSessions;
    } catch (error) {
        console.error("Cannot get sessions");
    }
};

// add a session
const addSession = async (req: Request, res: Response) => {
    try {
        const {
            name,
            description,
            session_status,
            start_time,
            end_time,
        } = req.body;
        const newSession = await pool.query(
            "INSERT INTO session (name, description, session_status, start_time, end_time) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [name, description, session_status, start_time, end_time]
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
        const { name, description, session_status } = req.body;
        const updatedSession = await pool.query(
            "UPDATE session SET name = $1, description = $2, session_status = $3 WHERE id = $4",
            [name, description, session_status, id]
        );
        res.json("Session was updated!\n");
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
    getSessions,
    addSession,
    updateSession,
    deleteSession,
};

