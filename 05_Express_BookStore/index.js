
const express = require('express');

const app = express();

const PORT = 8000;

// In memory data store for books
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

// Middleware to parse JSON request bodies -->(plugein)
app.use(express.json());

// Route to get all books
app.get("/books",(req,res)=>{
    res.json(books)
})

app.get("/books/:id",(req,res)=>{
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId)) {
        return res
        .status(400)
        .json({error: "id must be a number"})
    }

    const book = books.find((e)=> e.id === bookId)
    if (!book){
        return res
        .status(404)
        .json({error: "Book not found"})

    }
    return res.json(book)
    
})

app.post("/books",(req,res)=>{

    const {title, author} = req.body;
    if (!title || title === ""){
        return res
        .status(400)
        .json({error: "Title is required"})
    }
    if (!author || author === ""){
        return res
        .status(400)
        .json({error: "Author is required"})
    }

    const id = books.length +1
    const newBook = {id,title,author}
    books.push(newBook)
    
    return res.status(201).json({message: "Book created Success",id})    
});

app.delete("/books/:id",(req,res)=>{
    const bookId = parseInt(req.params.id);
    if (isNaN(bookId)) {
        return res
        .status(400)
        .json({error: "id must be a number"})
    }
    const indexToDelete = books.findIndex((e)=> e.id === bookId)
    if (indexToDelete < 0){
        return res
        .status(404)
        .json({error: "Book not found"})

    }
    books.splice(indexToDelete,1)
    return res.status(200).json({"message":"Book deleted"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});