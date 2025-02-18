
import { Router } from "express";
import  {getAllTask}  from "../controllers/tasks.controller";

const router = Router()

router.get('/tasks', getAllTask)

export default router;