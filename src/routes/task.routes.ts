
import { Router } from "express";
import { getAllTask, createNewTask}  from "../controllers/tasks.controller";

const router = Router()

router.get('/', getAllTask)
router.post('/new-task', createNewTask)

export default router;