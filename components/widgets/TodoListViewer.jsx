import React from 'react'

function TodoListViewer({ todos }) {
    return (
        <ul>
           {
               todos.map((todo, i) => {
                   return <li key={i} style={{fontSize: '2rem'}}>
                       {todo}
                   </li>
               })
           }
        </ul>
    )
}

export default TodoListViewer
