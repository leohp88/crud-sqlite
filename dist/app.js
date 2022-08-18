"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const todoRouter_1 = __importDefault(require("./routes/todoRouter"));
const connection_1 = require("./bd/connection");
const app = (0, express_1.default)();
//Middlewares 
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('combined'));
//Rutas 
const ruta = "/todo";
app.use(ruta, todoRouter_1.default);
//BD
(0, connection_1.connection)();
//Port
const port = process.env.PORT || "4000";
app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: " + port);
});
