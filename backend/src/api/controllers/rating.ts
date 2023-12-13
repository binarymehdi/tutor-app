import e, { Request, Response } from "express";
import pool from "../../db/index";

const addRating = async (req: Request, res: Response) => {
    try {
        const {
            user_id,
            performance_rating,
            comments,
        } = req.body;
        const newRating = await pool.query(
            "INSERT INTO ratings (user_id, performance_rating, comments) VALUES($1, $2, $3) RETURNING *",
            [user_id, performance_rating, comments]
        );

        res.json(newRating.rows[0]);
        return newRating;
    } catch (error) {
        console.error((error as Error).message);
    }
};