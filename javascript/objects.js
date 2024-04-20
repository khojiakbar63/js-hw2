//TODO: Home Task - Objects

1. // Building a Digital Bookshelf
   1. // Open empty array to store books.
   2. // Create function that adds a new book.
   3. // Create function that marks a book as read or not.
      1. // Get index of a new book.
      2. // Check index

   // 1-step
   const bookshelf = [];
   // 2-step
   function addBook(title, author, genre, pages) {
      newBook = {
         title,
         author,
         genre,
         pages,
         isRead: false
      }
      bookshelf.push(newBook)
      console.log(`"${title}" is added to the bookshelf!`);
   }
   // 3-step
   function markAsRead(title) {
      let bookIndex = bookshelf.findIndex((thisBook) => thisBook.title === title)
      
      if(bookIndex !== -1){
         bookshelf[bookIndex].isRead = true
         console.log(`"${title}" is read.`);
      }else{
         console.log(`"${title}" is not read.`);
      }
   }

   addBook('Beloved', 'Pushkin', 'classic', 234)

   markAsRead('Beloved')