import {Router, Request, Response} from "express";

export const router: Router = Router();

/**
 * The obligatory hello world
 **/
router.get('/hello-world', async (req: Request, res: Response) => {
    await res.send('hello world !');
});
