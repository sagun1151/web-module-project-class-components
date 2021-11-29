import React from "react";
import { render } from "react-dom";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state= {
            input:""
        }
    }

    handleChanges = x => {
        this.setState({
            ...this.state,
            input: x.target.value
        });
    };
    handleClick = (x) => {
        x.preventDefault();
        this.props.handleAddChore(this.state.input);
    }

    render(){
        return(
            <form>
                <input onChange={this.handleChanges} type="text" name='chore' placeholder="...todo" />
                <button onClick={this.handleClick}>Add Todo</button>
                <button onClick={this.props.handleToggle}>Clear Completed</button>
            </form>
        )
    }
    
};

export default TodoForm;