import React from 'react';
import Book from './Book';
import './App.css'
import PropTypes from 'prop-types'





const ListBooks = (props) => {
   return(
        <ol className="Books-list">{props.books.map((book) => <Book key={book.id} book={book} shelf={book.shelf} />)}</ol>
   )
}


ListBooks.propTypes = {
   books: PropTypes.array.isRequired
 };

export default ListBooks;

