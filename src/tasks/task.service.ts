import { Injectable, NotFoundException } from "@nestjs/common";
import e from "express";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

export interface User{

    name: string,
    age: number,
}


@Injectable()
export class TaskService{

    private tasks = [];

    getTask(){
        return this.tasks
    }

    getOneTask(id: number){
       const taskFound= this.tasks.find(task => task.id === id);
        if(!taskFound){
            return new NotFoundException(`Task with id ${id} not found`)
        }
        return  taskFound;
    }
    
    createTask(task: CreateTaskDto){
        console.log('task', task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task;
    }

    updateTask(task: UpdateTaskDto){
        console.log('task', task);
        return 'Actualizando tareas';
    }

    deleteTask(){
        return 'Eliminando tareas';
    }

    updateTaskStatus(){
        return 'Actualizando el estado de una tarea';
    }


}