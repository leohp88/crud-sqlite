import {Sequelize} from "sequelize"
import Todo from "../models/todoModel"


const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../todo.sqlite"

})

const connection = async(): Promise<void> => {
    try {
       await sequelize.authenticate()
       await Todo.sync() 
       console.log("Conectado a la BD")

    } catch (error) {
      console.log(error)  
    }
    
    }

export {
    sequelize, connection
}