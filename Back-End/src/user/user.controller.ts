import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    readAllUsers(): Promise<any>{
        return this.userService.readUser();
    }

    @Post()
    async createUser(@Body() user: User): Promise<any>{
        var result = await this.userService.createUser(user);
        return {id: result};
    }
}
