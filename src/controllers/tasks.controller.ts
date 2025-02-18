import { createNewTasks, getAllTasks}  from '../models/task.model'
import { Request, Response } from 'express'

export const getAllTask = async(req: Request, res: Response) => {
    try {
        const tasks = await getAllTasks();
        res.status(200).json({data: tasks})
    } catch (error) {
        res.status(500).json({error: 'Internal server error.'})
    }
}

export const createNewTask = async(req:  Request, res: Response) => {
    try {
        const {title, description, status} = req.body;
        if(!title || !description || !status){
            res.status(400).json({error: 'All fields are required.'})
        }
        await createNewTasks({title, description, status});
        res.status(201).json({success:  true, message: 'Task created successfully.'})
    } catch (error) {
        res.status(500).json({error: 'Internal server error.'})
    }
}