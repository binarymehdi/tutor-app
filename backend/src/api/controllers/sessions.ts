import { Request, Response } from "express";

const getSessions = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        res.send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

export {
    getSessions,
};

