"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./infra/database");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        (0, database_1.connect)();
    }
    initializeRoutes() {
        // this.app.use('/', )
    }
    interceptionError() {
        // this.app.use()
    }
    middlewaresInitialize() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true })); //text=Hello%20World
    }
    listen() {
        this.app.listen(3333, () => console.log('server is running'));
    }
}
exports.App = App;
