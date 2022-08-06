import { Router, NextFunction, Request, Response } from 'express';
import { Main } from '../controllers/main';

// eslint-disable-next-line new-cap
const router = Router();

router.all('/*', (req: Request, res: Response, next: NextFunction) => {
    console.log(`[Request] [${req.method}|${req.ip}] ${req.url}`);
    next();
});
router.get('/main', Main);

export default router;
