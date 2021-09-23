     const {query, books} = this.state
      const showingResults = query === ''
           ? '' : books.filter( (book) => {
                 return book.title.includes(query) ||  book.authors.includes(query)
           }) 