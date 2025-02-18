import {db} from '../config/database'

interface Task { 
    id?: number;
    title: string;
    description: string;
    status: string;
}

export const getAllTasks = async (): Promise<Task[]> => {
    const query = `select * from tasks`
    return new Promise((resolve, reject) => {
        db.query(query, (err: Error, result: Task[]) => {
            if(err){
                reject(err)
            }
            resolve(result as Task[])
        })
    })
    
}

export const createNewTask = async (task: Task) : Promise<void> => {
    
    if(!task.title || !task.description || !task.status){
        throw new Error('All fields all required.')
    }

    const query = `insert into tasks (title, description, status) values (?,?,?)`;
    await db.query(query, [task.title, task.description, task.])


   
}
