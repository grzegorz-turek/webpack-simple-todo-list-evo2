import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import style2 from '../components/TodoList.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    text: 'wash my cat',
                    id: 1
                },
                {
                    text: 'wash my \'97 VW Passat TDI',
                    id: 2
                },
                {
                    text: 'wash my smelly foot',
                    id: 3
                }
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title propsNoOfItems={this.state.data.length} />
                <div className={style2.TodoListFormatting}>
                    <TodoList propsTodoList={this.state.data} todoRemoval={this.removeTodo.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;