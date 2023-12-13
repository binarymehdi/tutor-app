import express from 'express';

const login = async function login(req: express.Request, res: express.Response) {
    // very empty for now
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