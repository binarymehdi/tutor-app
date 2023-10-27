import express from 'express';

const login = async function login(req: express.Request, res: express.Response) {
    res.send('login');
}

const forgot = async function login(req: express.Request, res: express.Response) {
    res.send('login');
};

const reset = async function login(req: express.Request, res: express.Response) {
    res.send('login');
}

export {
    login,
    forgot,
    reset
};