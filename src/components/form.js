function Form({setTodos})
{
    const handleSubmit = (event)=>
    {
        event.preventDefault();
        setTodos((previousTodos)=>[
            ...previousTodos,
            {title : event.target[0].value, id : crypto.randomUUID(),isCompleted : false}

        ])
    }
    return(
        <form onSubmit={handleSubmit} className="form"> 
            <input type="text" name="task"/>
            <input type="submit" value="Submit"/>
        </form>
    )
}
export default Form; 