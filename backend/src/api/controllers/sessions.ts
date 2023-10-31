import { Request, Response } from "express";
import pool from "../../db/index";
// get a session

// get all sessions
const getSessions = async (req: Request, res: Response) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO session (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0]);
    } catch (error) {
        console.error((error as Error).message);
    }
};

// create a session

// update a session

// delete a session

export {
    getSessions,
};

