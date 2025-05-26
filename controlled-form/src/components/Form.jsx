
const Form = ({handleSubmit, titleRef, authorRef}) =>{
    
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <h4>Title:</h4>
            <input name="title" ref={titleRef} defaultValue=""/>
        </div>
        <div>
            <h4>Author:</h4>
            <input name="author" ref={authorRef} defaultValue=""/>
        </div>
        <button>Add Book</button>
        </form>
        </>
    )
}
 export default Form