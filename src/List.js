import React from 'react';
import ToDoList from './ToDoList';

const List = (props) => {
  return (
    <ul>
        {props.items.map((item, index) => {
            return (
                <li key={index}>
                    {item}
                    {/* <button >Done</button> */}
                </li>
                
                )
        })}
    </ul>
  )
}

export default List;
