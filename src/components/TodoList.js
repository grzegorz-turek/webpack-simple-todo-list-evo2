import React from 'react';

const TodoList = props =>
    props.propsTodoList.map(itm =>
        <li key={itm.id} onClick = {()=>props.todoRemoval(itm.id)}>{itm.text}</li>
    )

export default TodoList;