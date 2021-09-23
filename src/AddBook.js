import React,{useEffect,useState} from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'
//import serialize from 'form-serialize';
const AddBook = (props) =>{

 
    const [state, setState] = useState([])
    const [query, setQuery] = useState('')
    const [output, setoutput] = useState('')
           
  

    useEffect(()=>{
      loadData()
      },[])

    const loadData = async()=>{
       const response = await fetch(BooksAPI.search(state))
       const data = await response.json()
       setState(data.title)
    }


        return(
            <div className="search-books">
                <div className="search-books-bar">
                   <Link to={'/'} className="close-search"> Close</Link>
                     <form className="search-books-input-wrapper">                      
                        <input type="text"
                               placeholder="Search by title or author" 
   							   onChange= {(e) => setState(e.target.value)}
                            />                      
                    </form>
               </div>
                
                <div className="search-books-results">               
                  <ol className="books-grid">
                    {output.length !== 0? output.map((e)=>(  
                             <li> 
                               <Book Book={state}/>
                             </li>
                        )):''} 
                  </ol>                                             				 						
                </div>					
                {state}                       				      
           </div>      
                
           )
       }
   


export default AddBook