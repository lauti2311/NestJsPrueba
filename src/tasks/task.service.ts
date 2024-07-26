import { Injectable } from "@nestjs/common";
import e from "express";

@Injectable()
export class TaskService{
    getTask(){
        return['Task 1', 'Task 2', 'Task 3'];
    }

}