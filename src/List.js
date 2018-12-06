import React from 'react';
import ToDoList from './ToDoList';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

// const List = (props) => {
//   return (
//     <ul>
//         {props.items.map((item, index) => {
//             return (
//                 <li key={index}>
//                     {item}
//                     <button onClick={(e)=> props._delete(index)}>Done</button>
//                 </li>
                
//                 )
//         })}
//     </ul>
//   )
// }



const List = SortableContainer((props) => {
    return (
      <ul>
          {props.items.map((item, index) => {
              return (
                  <SortableList key={index} index={index} item={item} _delete={(e)=> props._delete(index)} style={props.style}/>
                  
                  )
          })}
      </ul>
    )
  })

const SortableList = SortableElement((props) => {
    return (
        <li >
            {props.item}
            <button onClick={(e)=> props._delete(props.index)} style={props.style}>Done</button>
        </li>
    )
})

export default List;
