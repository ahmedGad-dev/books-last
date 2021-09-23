import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class BookDetails extends React.Component{
  state = {
    book: {},
    query: ''
  }
  
  
  componentDidMount(){
    const bookID = this.props.match.params.id
    BooksAPI.get(bookID).then( (book) =>{
    	this.setState({book})
    })
  }
  
   changeHandler = (query) => {
    this.setState( () => ({
         query: query,
       }))
    BooksAPI.search(query, 20)
  }
  
  render(){
   const {book, query} = this.state
   return(     
     <div> 
         <Link to={'/search'} className="close-search"> Close</Link>
         <div className="search-books-results">
 		    <ol className="books-grid">
               <li key={book.id}>
                  <div className="book">
                      <div className="book-top">
                           <div className="book-cover" style={{backgroundImage: `url(${book.thumbnail})`}}></div>
                             <div className="book-shelf-changer">
                                  <select key={book.shelf}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                             </div>
                           </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                   </div>
               </li>       
            </ol>
         </div>
    </div>
    )
  }  
}

export default BookDetails