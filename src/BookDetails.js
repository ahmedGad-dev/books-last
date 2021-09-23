import React from 'react'
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
  

  
  render(){
   return(     
     <div> 
         <Link to={'/search'} className="close-search"> Close</Link>
         <div className="search-books-results">
            <ol className="books-grid">
               {this.state.book}     
            </ol>
         </div>
    </div>
    )
  }  
}

export default BookDetails