import { Book } from "./book";

export class Library {
  private books: Book[];
  private address: string;
  private manager: string;

  constructor(books: Book[], address: string, manager: string) {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }

  getBooks(): Book[] {
    return this.books;
  }

  setBooks(books: Book[]) {
    this.books = books;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    this.address = address;
  }

  getManager(): string {
    return this.manager;
  }

  setManager(manager: string) {
    this.manager = manager;
  }

  toString(): string {
    let result = "";
    this.books.forEach((book) => {
      result += `Title – ${book.getTitle()}
Numer of Pages - ${book.getNPages()}
ISBN – ${book.getISBN()}
Author – ${book.getAuthor()}
Editorial – ${book.getEditorial()}\n`;
    });
    return result;
  }
}




// AÑADIR METODOS

// NO SE CITAR

import { Book } from "./book";

export class Library {
  private books: Book[];
  private address: string;
  private manager: string;

  constructor(books: Book[], address: string, manager: string) {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }

  getBooks(): Book[] {
    return this.books;
  }

  setBooks(books: Book[]) {
    this.books = books;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string) {
    this.address = address;
  }

  getManager(): string {
    return this.manager;
  }

  setManager(manager: string) {
    this.manager = manager;
  }

  getNumberOfBooks(): number {
    return this.books.length;
  }

  findByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.getAuthor() === author);
  }

  toString(): string {
    let result = "";
    this.books.forEach((book) => {
      result += `Title – ${book.getTitle()}
Numer of Pages - ${book.getNPages()}
ISBN – ${book.getISBN()}
Author – ${book.getAuthor()}
Editorial – ${book.getEditorial()}\n`;
    });
    return result;
  }
}
