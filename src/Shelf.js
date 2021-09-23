import React from 'react';
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI';


class Shelf extends React.Component {
  
    state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
   
    componentDidMount() {
      BooksAPI.getAll().then((books) =>{
        if(Array.isArray(books)){
    	this.setState({
          books
        })
       }
     })
   }
  
  bookShelf =  () => {
    this.state.books.map( (book) => {
      if (book.shelf === "currentlyReading"){
        return this.state.currentlyReading.push(book)
      }
    else if( book.shelf === "wantToRead"){
       return  this.state.wantToRead.push(book)
  }else{
        return this.state.read.push(book)
      }
   })
 }

  
   render(){
        return( 
               <div className="bookshelf">         					                          
                 <h2 className="bookshelf-title">{this.props.title}</h2>
              	  <div className="bookshelf-books">  
                      <ListBooks books={this.state.books}/>
                  </div> 
                </div>		         
         )
      }
  }

export default Shelf 
