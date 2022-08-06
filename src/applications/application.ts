import express, { Request, Response, NextFunction } from 'express';
import router from '../router/router';
import HTTPError from '../types/httpError';

class Application {
    public application: express.Application;
    constructor() {
        this.application = express();
        this.application.use(express.json());
    }
}

const application: express.Application = new Application().application;

application.use('/', router);
application.use(express.static('public'));

application.use((_req: Request, _res: Response, next: NextFunction) => {
    next(new HTTPError(404, '404 Not Found'));
});

application.use((err: HTTPError, _req: Request, res: Response, next: NextFunction) => {
    res.status(err?.rawStatusCode ?? 500);
    res.json({
        code: err?.rawStatusCode ?? 500,
        message: err?.message || err?.rawStatusCodeMessage,
        data: err?.rawData,
    });
    next();
});

export default application;
