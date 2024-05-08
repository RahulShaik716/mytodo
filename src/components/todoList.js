import {ReactComponent as CompleteSvg} from '../assests/complete-svgrepo-com.svg';
import {ReactComponent as DeleteSvg} from '../assests/delete-svgrepo-com.svg';

function TodoList({todos,setTodos}) 
{
    return(
        <div className="list"> 
          {todos && todos.length>0 ?(todos.map(item=> (
              <Item todo={item} key={item.id} todos={todos} setTodos={setTodos}/>)
          )):<>Nothing here do something lazy fuck</>}
        </div>
    )
}
function Item({todo,todos,setTodos})
{
  const determineFillColor = () => {
    // Logic to determine fill color based on fillValue
    if (todo.isCompleted) 
      return '#00ff00'; // green color
    else 
      return '#fff';
  };
  const taskComplete = (todo,todos,setTodos)=>
  {

    const index = todos.findIndex(x=> x.id===todo.id);
    const newData = [...todos];
    newData[index].isCompleted = true; 
    setTodos(newData);
  
  };
  const taskDelete = (todo,todos,setTodos)=>
  {
    const updatedTodos = todos.filter(item => item.id !== todo.id);
    // Update the state with the new array
    setTodos(updatedTodos);
  };
    return(
    <div className="listitem"> 
    <div className='left'>
     <svg width="5vw" height="5vh">
      {/* Circle with fill value determined dynamically */}
      <circle cx="3vw" cy="2.5vh" r="10" stroke="black" strokeWidth="2" fill={determineFillColor()} />
    </svg>
        <p style={todo.isCompleted?{textDecoration:'line-through'}:{}}> {todo.title}</p>
        </div>
     <div className="right"> 
     <div onClick={()=>taskComplete(todo,todos,setTodos)}>
     <CompleteSvg/>
     </div>
     <div onClick={()=>taskDelete(todo,todos,setTodos)}>
     <DeleteSvg/>
     </div>
      </div>
    </div>)
}
export default TodoList;