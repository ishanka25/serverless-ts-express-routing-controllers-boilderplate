import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import "reflect-metadata"; // this shim is required
import { useExpressServer } from "routing-controllers";
import { TestController } from './test/test.controller';

class App {
    app: express.Application;

    constructor() {
        this.app = express();
        this.configExpress();
    }

    configExpress() {
        //Allows us to receive requests with data in json format
        this.app.use(bodyParser.json({ limit: '50mb' }));

        //Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

        //Enables cors
        this.app.use(cors());

        //Enables security
        this.app.use(helmet());

        //rounting-controller config
        useExpressServer(this.app, {
            routePrefix: "/api",
            defaultErrorHandler: true,
            controllers: [
              TestController
            ]
        });
    }
}

export default new App().app;
