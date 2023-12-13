import { Request, Response } from "express";
import pool from "../../db/index";

const addUser = async (req: Request, res: Response) => {
    try {
        const {
            first_name,
            last_name,
            email,
            password,
            role
        } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (first_name, last_name, email, password, role) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [first_name, last_name, email, password, role]
        );

        res.json(newUser.rows[0]);
        return newUser;
    } catch (error) {
        console.error((error as Error).message);
    }
};

const getUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
        return allUsers;
    } catch (error) {
        console.error("Cannot get users");
    }
};

const editUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { first_name, last_name, email, password, role } = req.body;
        const updatedUser = await pool.query(
            "UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, role = $5 WHERE id = $6",
            [first_name, last_name, email, password, role, id]
        );
        res.json("User was updated!\n");
        return updatedUser;
    } catch (error) {
        console.error((error as Error).message);
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedUser = await pool.query(
            "DELETE FROM users WHERE id = $1",
            [id]
        );
        res.json("User was deleted!\n");
        return deletedUser;
    } catch (error) {
        console.error((error as Error).message);
    }
};

export { addUser, getUsers, editUser, deleteUser };
