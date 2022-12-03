import express from "express";
import fileUpload from "express-fileupload"
import usersRoutes from "./routes/users.routes.js"
import labRoutes from "./routes/labs.routes.js"
import computerRoutes from "./routes/computers.routes.js"
import ftRouters from "./routes/ft.routes.js"

const app = express()

//middlewares
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

//routes
app.use(usersRoutes)
app.use(labRoutes)
app.use(computerRoutes)
app.use(ftRouters)

export default app