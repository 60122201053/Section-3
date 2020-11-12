import { Injectable } from '@nestjs/common';

import { IBook } from './book.interface'

@Injectable()
export class BooksService {
    update(book: IBook) {
      const foundIdx = this.books.findIndex(existedBook => existedBook.id == book.id);
    if(foundIdx == -1){
        return 'error';
    }
    this.books = [...this.books.slice(0,foundIdx),book,...this.books.slice(foundIdx + 1)];
    return book;
    }
    delete(id: string) {
        this.books = this.books.filter(book => book.id != id);
        return id;
    }
    create(book: IBook) {
        book.id = Date.now().toString();
        this.books = this.books.concat(book);
        return book;
    }
    private books: IBook[] = [];

    findAll(){
        return this.books;
    }
    find(id: string){
        return this.books.find(book => book.id == id)
    }
}
