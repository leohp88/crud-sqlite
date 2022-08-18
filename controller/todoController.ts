import { Request,  Response } from "express";
import Todo from "../models/todoModel";


const getTodo= async(req:Request, resp:Response): Promise<void>=>{
const todo = await Todo.findAll()
resp.json({
    todo
})

    
}

const postTodo=async(req:Request, resp:Response): Promise<void>=>{

    const  {title, complete} = req.body

    const todo = await Todo.create({title, complete})
                await todo.save()
    
    resp.json({
        todo
    })
}
const putTodo = async(req: Request, res:Response): Promise<void> => {
 const {id} = req.params
 const {title, complete} = req.body
try {
    const todo = await Todo.findByPk(id)
                 await todo?.update({title, complete}) 

    res.json({
        todo
    })          
} catch (error) {
   console.log(error)
}
  
          



}

const deleteTodo = async(req: Request, res:Response): Promise<void> => {
    const {id} = req.params
     
try {
    const todo = await Todo.findByPk(id)
                 await todo?.destroy() 
    res.json({todo})             
} catch (error) {
  console.log(error)  
}
}

export {
    getTodo,
    postTodo,
    putTodo,
    deleteTodo
    
}