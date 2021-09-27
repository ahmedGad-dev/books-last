import React,{useState} from 'react';


const Book = (props) => {

  const [state, setState] = useState('')
  const {book} = props
  const handleChanges=(e)=>{
    setState(e.target.value)
  }

  
   return(
     <div>
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                     <div className="book-cover" style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                       <div className="book-shelf-changer">
                            <select key={book.shelf} value={state} onChange={(e)=>handleChanges(e)}>
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
         {book.shelf}
     </div>
    )
  }

  
export default Book