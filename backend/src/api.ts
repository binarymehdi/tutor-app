import express, {Request, Response} from "express";
import apirouter from "./api/index";
import cors from "cors";
import pool from "./db";

const api = express();

// middleware
api.use(cors());
api.use(express.json());

// routes
api.use("/api", apirouter);

export default api;