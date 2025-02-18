import {getAllTasks}  from '../models/task.model'
import { Request, Response } from 'express'

export const getAllTask = async(req: Request, res: Response) => {
    try {
        const tasks = await getAllTasks();
        res.status(200).json({data: tasks})
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
}
