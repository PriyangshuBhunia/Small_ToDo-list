import React from "react";

function ToDoItem(props){
    //todo : if once use to line -through  use this comment. 
    // const[isDone, setIsDone] = useState(false);

    // function handleClick(){
    //     setIsDone((preValue)=> {
    //         return !preValue; 
    //     })
    // }


    // return(
    //     <div onClick={handleClick}>
    //          <li style={{textDecoration: isDone? 'line-through' : "none"}}>{props.text}</li>
    //     </div>
    // );
    
    
    return(
        <div onClick={()=>{
            props.onChecked(props.id);
        }}>
            <li>{props.text}</li>
        </div>
    );
    
}

export default ToDoItem;