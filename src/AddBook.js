import React from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize';
import {Route} from 'react-router-dom';


class AddBook extends React.Component {

    state ={
        books: [],
        query:'',
    }
           
  
  componentDidMount() {
   BooksAPI.getAll()
     .then((books) => this.setState( () => ({
        books
    }))
   )
 }
  
  changeHandler = (query) => {
    this.setState( () => ({
         query: query,
       }))
    BooksAPI.search(query, 20)
  }

  
    render(){
      const {query, books} = this.state
      const showingResults = query === ''
           ? '' : books.filter( (book) => {
                  book.title.toLowerCase().includes(query.toLowerCase()) ||  book.authors.includes(query.toLowerCase())
           })
      
        return(
                <div className="search-books">
                    <div className="search-books-bar">
                       <Link to={'/'} className="close-search"> Close</Link>
                       <form className="search-books-input-wrapper">                      
                           <input type="text"
                            placeholder="Search by title or author" 
                            value={query} 
   							onChange= {(event) => this.changeHandler(event.target.value)}
                            />                      
                       </form>
                    </div>                   
				    <div className="search-books-results">
 					  <ol className="books-grid">
							{JSON.stringify(this.state.query)}
                      </ol>                             				 						
                    </div>					
               </div>              
           )
       }
   }


export default AddBook