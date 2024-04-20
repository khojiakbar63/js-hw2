//TODO: Home Task - Objects

1. // BUILDING A DIGITAL BOOKSHELF:

   1. // Open empty array to store books.
   2. // Create function that adds a new book.
   3. // Create function that marks a book as read or not.
      1. // Get index of a new book.
      2. // Check index

   // 1-step
   // const bookshelf = [];
   // 2-step
   // function addBook(title, author, genre, pages) {
   //    newBook = {
   //       title,
   //       author,
   //       genre,
   //       pages,
   //       isRead: false
   //    }
   //    bookshelf.push(newBook)
   //    console.log(`"${title}" is added to the bookshelf!`);
   // }
   // 3-step
   // function markAsRead(title) {
   //    let bookIndex = bookshelf.findIndex((thisBook) => thisBook.title === title)
      
   //    if(bookIndex !== -1){
   //       bookshelf[bookIndex].isRead = true
   //       console.log(`"${title}" is read.`);
   //    }else{
   //       console.log(`"${title}" is not read.`);
   //    }
   // }

   // addBook('Beloved', 'Pushkin', 'classic', 234)
   // markAsRead('Beloved')

2. // BUILDING A CONTACT MANAGEMENT SYSTEM:

// Empty contact list
const contactList = [];
// Add a new contact function
function addContact(name, email, phone, address) {
   let newContact = {
      name,
      email,
      phone,
      address
   }
   contactList.push(newContact)
   return newContact
}

// Update contactlist function 

function updateContactInfo(name, newEmail, newPhone) {
   let contactIndex = contactList.findIndex((contact) => contact.name === name);

   if(contactIndex !== -1){
      let {name, email, phone, address} = contactList[contactIndex]
   
      if(newEmail !== null){
         email = newEmail;
      }
   
      if(newPhone !== null){
         phone = newPhone;
      }

      contactList[contactIndex] = {name, email, phone, address}
      console.log(`Contact ${name} updated successfully.`);

   }else{
      console.log(`Contact ${name} is not found in the contact list.`);
   }


}

console.log(addContact('Omar', 'omar7798@mail.com', +998900241098, address={city:'Tashkent', country: 'Uzbekistan'}));

console.log(updateContactInfo('Omar', 'omar7798@mail.ru', +998900241088));
console.log(contactList);