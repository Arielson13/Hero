"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function connect() {
    try {
        await mongoose_1.default.connect('mongodb+srv://arielsonsousa37:bJ96VcjeNx3YO6ZI@cluster0.pwp2bkm.mongodb.net/hero-tickets');
        console.log('Connect database success');
    }
    catch (error) {
        console.log(error);
    }
}
exports.connect = connect;
