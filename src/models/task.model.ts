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

export const createNewTasks = async (task: Task) : Promise<void> => {
    const query = `insert into tasks (title, description, status) values (?,?,?)`;
    return new Promise((resolve, reject) => {
        db.query(query, [task.title, task.description, task.status], (err) => {
            if(err){
                reject(err)
            }
            resolve()
        })
    })
    
}
