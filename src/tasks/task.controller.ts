import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TaskController{
    
    taskService:TaskService;
    
    constructor(taskService:TaskService) {
        this.taskService = taskService;
    }

    @Get()
    getAllTasks(@Query() query: any){
        console.log('query', query);
        return this.taskService.getTask();
    }
    
    @Get('/:id')
    getTasks(@Param('id')id:string){
        
        return this.taskService.getOneTask(parseInt(id));
    }
    
    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto){
        return this.taskService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto){
        return this.taskService.updateTask(task);
    }
 
    @Delete()
    deleteTask(){
        return this.taskService.deleteTask();
    }

    @Patch()
    patchTask(){
        return this.taskService.updateTaskStatus();
    }
}