import express from 'express'
import dotenv from 'dotenv'
import taskRoutes from './routes/task.routes'
import cors from 'cors'

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4000

app.use('/api/tasks', taskRoutes)

app.listen(PORT, ()=> {
    console.log(`Server listening in ${PORT}`)
})