import {DataTypes} from "sequelize"
import { sequelize } from "../bd/connection";

const Todo = sequelize.define("Todo", {

   id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true

   },
   title: {
     type: DataTypes.STRING
   },
   complete: {
    type: DataTypes.BOOLEAN
   }
  
})

export default Todo