"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const todoModel_1 = __importDefault(require("../models/todoModel"));
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "../todo.sqlite"
});
exports.sequelize = sequelize;
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        yield todoModel_1.default.sync();
        console.log("Conectado a la BD");
    }
    catch (error) {
        console.log(error);
    }
});
exports.connection = connection;
