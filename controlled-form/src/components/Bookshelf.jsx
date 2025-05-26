import { useState } from "react";
import Form from "./Form"
import Bookcards from "./Bookcards"
import { useRef } from "react";

const Bookshelf = () =>{
    const [books, setBooks] = useState([]);

    const titleRef = useRef()
    const authorRef = useRef()
    
    const ClearInput = (titleRef, authorRef) =>{
        titleRef.current.value = "";
        authorRef.current.value = "";
        }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        setBooks([...books,data])
        ClearInput(titleRef, authorRef)
    }

    return(
    <div className="bookshelfDiv">
        <div className="formDiv">
        <h3>Add a Book</h3>
        <Form handleSubmit={handleSubmit} titleRef={titleRef} authorRef={authorRef}/>
        </div>
        <div className="bookCardsDiv">
        <Bookcards books={books}/>
        </div>
    </div>
    )    
}

export default Bookshelf