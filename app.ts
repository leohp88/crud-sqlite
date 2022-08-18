import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"
import route from "./routes/todoRouter"
import { connection } from "./bd/connection"
import Todo from "./models/todoModel"


const app : Application = express()

//Middlewares 
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))
//Rutas 
const ruta:string = "/todo"

app.use(ruta, route)

//BD
connection()


//Port
const port = process.env.PORT || "4000" as string


app.listen(port, ()=> {
    console.log("Servidor corriendo en el puerto: " + port )
})
 


