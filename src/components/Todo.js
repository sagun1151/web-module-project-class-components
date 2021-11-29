import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.handleToggleChore(props.chores)
    };

    return (<div onClick={handleClick} className='chore'>
        <p>{props.chores.task}</p>
    </div>)
};

export default Todo;