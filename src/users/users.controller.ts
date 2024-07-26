import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/users')
export class UsersController {
    
    constructor(private usersService: UsersService) {}
    
    @Get()
    getusers(){
        return this.usersService.getUsers();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto){
        return this.usersService.createrUser(user);
    }
}
