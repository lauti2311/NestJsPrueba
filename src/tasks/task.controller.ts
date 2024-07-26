import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller({})
export class TaskController{
    
    taskService:TaskService;
    
    constructor(taskService:TaskService) {
        this.taskService = taskService;
    }

    @Get('/tasks')
    getAllTasks(){
        return this.taskService.getTask();
    }
}