import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IBook } from './book.interface';
import { BooksService } from './books.service';
@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}
    @Get()
    findAll(){
        return this.booksService.findAll();
    }
    @Get(':id')
    find(@Param('id') id: string){
        return this.booksService.find(id);
    }
    @Post()
    create(@Body() book: IBook){
        return this.booksService.create(book);
    }

    @Put()
    update(@Body() book:IBook){
        return this.booksService.update(book);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.booksService.delete(id)
    }
}
