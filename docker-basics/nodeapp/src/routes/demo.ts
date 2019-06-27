import * as nameRepository from '../database/names';
import {Router, Request, Response} from "express";

export const router: Router = Router();

/**
 * The obligatory hello world
 **/
router.get('/hello-world', async (req: Request, res: Response) => {
    await res.send('hello world !');
});

/**
 * Get all names from the db
 **/
router.get('/names', async (req: Request, res: Response) => {
    try {
        const names = await nameRepository.list();
        const payload = names.rows;
        await res.json(payload);
    } catch (e) {
        console.error("ERROR in /names: " + e);
        res.sendStatus(500);
    }
});
