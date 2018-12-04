import React, {Component} from 'react';
import List from "./List";

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            items: []
        }
    }
    render(){
        return (
            <div>
                <h1>Todo App</h1>
                <form onSubmit={this._onSubmit}>
                    <input value={this.state.term} onChange={this._onChange} placeholder="Enter Todo"/>
                    <button type="submit">add</button>
                </form>
                <List items = {this.state.items}/>
            </div>
        );
    }

    _onChange = (e) => {
        this.setState ({
            term: e.target.value
        })
    }

    _onSubmit = (e) => {
        e.preventDefault();
        this.setState ({
            term: '',
            items: [...this.state.items, this.state.term]
        })
    }
    _delete = (id) => {
        // let filtered = this.state.items.filter(item => {
        //     return item.index 
        // })
        console.log(id);
    }
}

export default ToDoList;