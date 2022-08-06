import { Request, Response } from 'express';

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} _next
 */
export function Main(req: Request, res: Response): void {
    res.send('main!!!');
}
