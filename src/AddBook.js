import React from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks';



class AddBook extends React.Component { 

    constructor(props) {
      super(props);
      this.state = { 
        query: '',
        books: [],
      }
    }
 
     queryHandler = (event) => {
       this.setState({
        query : event.target.value
       })
    }

     componentWillUpdate(){  
       if(this.state.query !== '') {
          BooksAPI.search(this.state.query).then((books) =>{
            this.setState({
                books
              })
          })     
        }     
      }

    
  render(){
    const {query, books} = this.state
    return(    
      <div className="search-books">
          <div className="search-books-bar">
            <Link to={'/'} className="close-search"> Close</Link>
            <form className="search-books-input-wrapper">                      
              <input
               type="text"
               placeholder="Search by title or author"
               value= {query}
               onChange= {this.queryHandler}                         
              />                      
            </form>
          </div>
                
          <div className="search-books-results"> 
              <ol className="books-grid">
               { books && <ListBooks books={books} /> }
              </ol>                                                                                                                       				 						
          </div>					
           {query}                                				      
      </div>                    
          )
       }
    }


export default AddBook