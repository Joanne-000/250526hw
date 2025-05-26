const Bookcards = ({books}) =>{
    console.log(books)

    return (
        <div>
            {books.map((book)=>(
                <>
                <h4><strong>{book.title}</strong></h4>
                <p>{book.author}</p>
                </>
            ))}
        </div>
    )
}

export default Bookcards