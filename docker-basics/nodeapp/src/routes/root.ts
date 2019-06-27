import {Router, Request, Response} from "express";

export const router: Router = Router();

/**
 * Always send status code 200 / OK as long as the server is running
 **/
router.get('/', async (req: Request, res: Response) => {
    await res.sendStatus(200);
});

/**
 * Do some health checks here and response with status code 200 if everything is working and if not return 500
 * - On AWS, configure Application Loadbalancers to this endpoint ()
 * - On Kubernetes, configure liveliness probe to this endpoint
 **/
router.get('/health', async (req: Request, res: Response) => {
    // For example check if database connection is working here
    await res.sendStatus(200);
});
