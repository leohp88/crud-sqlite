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
exports.deleteTodo = exports.putTodo = exports.postTodo = exports.getTodo = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const getTodo = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield todoModel_1.default.findAll();
    resp.json({
        todo
    });
});
exports.getTodo = getTodo;
const postTodo = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, complete } = req.body;
    const todo = yield todoModel_1.default.create({ title, complete });
    yield todo.save();
    resp.json({
        todo
    });
});
exports.postTodo = postTodo;
const putTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, complete } = req.body;
    try {
        const todo = yield todoModel_1.default.findByPk(id);
        yield (todo === null || todo === void 0 ? void 0 : todo.update({ title, complete }));
        res.json({
            todo
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.putTodo = putTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const todo = yield todoModel_1.default.findByPk(id);
        yield (todo === null || todo === void 0 ? void 0 : todo.destroy());
        res.json({ todo });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteTodo = deleteTodo;
