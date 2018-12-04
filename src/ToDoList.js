import React, {Component} from 'react';
import List from "./List";
import logo from './logo.svg'; 

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
                <div className="header">
                <img src={logo} className='App-logo' alt="logo"/>
                <h1>Todo App</h1>
                </div>
                <form onSubmit={this._onSubmit}>
                    <input value={this.state.term} onChange={this._onChange} placeholder="Enter Todo"/>
                    <button type="submit">add</button>
                </form>
                <List items={this.state.items} _delete={this._delete} />
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
        const items = this.state.items.filter((item, todoIndex) => {
            return todoIndex !== id
          })
          this.setState({ items })
    }
}

export default ToDoList;