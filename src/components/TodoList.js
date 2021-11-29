// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (<div className ='chore-list'>
        {props.chores.map(chore => (
            <Todo handleToggleChore={props.handleToggleChore} key={chore.id} chores={chore} /> 
        ))}
    </div>)
};

export default TodoList;