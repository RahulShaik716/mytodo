function Todohero({length})
{
    return (
        <div className="todohero">
            <div className="class1">
            <p className="title"> Tasks Done</p>
            <p className="subtitle"> Keep it Up</p>
            </div>
            <div className="class2">
                {length[0]+"/"+length[1]}
            </div>
        </div>
    )
}
export default Todohero;