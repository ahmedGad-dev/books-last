import React from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import AddBook from './AddBook';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks'
import Shelf from './Shelf'
import BookDetails from './BookDetails'

class BooksApp extends React.Component {
  
  state = {
     books : []
  }
   
     componentDidMount() {
      BooksAPI.getAll().then((books) =>{
    	this.setState({
          books
        })
     })
  }
  
  render() { 
    return (
      <div className="app">
      <Switch>
        <Route exact path={'/'} render={() => (
          <div className="list-books">
               <h1 className="list-books-title">MyReads</h1>
             <div className="list-books-content">
               <ListBooks books={this.state.books}/>
			   <Shelf title='Currently Reading'/>
			   <Shelf title='Want To Read'/>
               <Shelf title='Read'/>
             </div>        
             <Link className="open-search" to='/search' title='Add a book'></Link>
          </div>
        )}/>         
          <Route exact path= "/search" component={AddBook} /> 
          <Route exact path= "/search/:id" component={BookDetails}/> 
       </Switch>
      </div>
    )
  }
}

export default BooksApp

