import React, {Component} from 'react';
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
  
  currentlyReading =  () => {
    this.state.books.map( (book) => {
      if (book.shelf === "currentlyReading"){
         this.state.currentlyReading.push(book)
      }
    else if( book.shelf === "wantToRead"){
         this.state.wantToRead.push(book)
  }else{
         this.state.read.push(book)
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
