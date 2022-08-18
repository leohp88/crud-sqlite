"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../bd/connection");
const Todo = connection_1.sequelize.define("Todo", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING
    },
    complete: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Todo;
