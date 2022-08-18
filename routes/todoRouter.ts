import {Router} from "express"
import { deleteTodo, getTodo, postTodo, putTodo } from "../controller/todoController"

const router = Router()

router.get("/", getTodo)
router.post("/", postTodo)
router.put("/:id", putTodo)
router.delete("/:id", deleteTodo)

export default router