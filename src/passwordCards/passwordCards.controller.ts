/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Param, Body, Delete, Put, UseInterceptors } from "@nestjs/common";
import { PasswordCardsService } from './passwordCards.service';

@Controller('passwordCards')
export class PasswordCardsController {
    constructor(private readonly passwordCardservice: PasswordCardsService){}

    @Get()
    findAll(){
        return this.passwordCardservice.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.passwordCardservice.findOne(id);
    }

    @Post()
    @UseInterceptors()
    create(@Body() body) {
        return this.passwordCardservice.create(body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.passwordCardservice.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.passwordCardservice.update(id, body)
    }
}