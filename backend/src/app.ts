import express, { Application, urlencoded } from 'express'
import { connect } from './infra/database';
import { errorMidleware } from './middlewares/error.middleware';

class App {
    public app: Application
    constructor() {
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        connect();
    }

    initializeRoutes() {
        // this.app.use('/', )
    }

    interceptionError() {
        this.app.use(errorMidleware)
    }

    middlewaresInitialize() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true })); //text=Hello%20World
    }

    listen() {
        this.app.listen(3333, () => console.log('server is running'))
    }
}
export { App }