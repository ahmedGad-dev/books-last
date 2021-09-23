import React from 'react';
import Book from './Book';
import './App.css'






const ListBooks = (props) => {
   return(
        <ol className="Books-list">{props.books.map((book) => <Book key={book.id} book={book} shelf={book.shelf} />)}</ol>
   )
}

export default ListBooks;

