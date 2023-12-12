import express from 'express';

const login = async function login(req: express.Request, res: express.Response) {
    res.send('login');
}

const forgot = async function login(req: express.Request, res: express.Response) {
    res.send('forgot');
};

const reset = async function login(req: express.Request, res: express.Response) {
    res.send('reset');
}

export {
    login,
    forgot,
    reset
};