import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    
    constructor(private usersService: UsersService) {}
    
    @Get('/users')
    getusers(){
        return this.usersService.getUsers();
    }
}
