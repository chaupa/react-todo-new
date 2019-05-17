import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import ListTodo from '../components/ListTodo';
import FilterTodo from '../components/FilterTodo';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            editing: false,
            filter: 'all',
            todo: [
                {
                    title: 'abc',
                    isCompleted: false,
                },
                {
                    title: 'def',
                    isCompleted: false,
                },
            ],
        };
        this.handleToggleComplete = this.handleToggleComplete.bind(this);
        this.handleAddNewSubmit = this.handleAddNewSubmit.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleToggleComplete(index) {
        return () => {
            this.setState({
                todo: this.state.todo.map((x, i) => {
                    if (index === i) {
                        x.isCompleted = !x.isCompleted;
                        return x;
                    }
                    return x;
                }),
            });
        };
    }

    handleAddNewSubmit(title) {
        this.setState({
            todo: [
                {
                    title,
                    isCompleted: false,
                },
                ...this.state.todo,
            ],
        });
    }

    handleDeleteTodo(index) {
        return () => {
            this.setState({
                todo: this.state.todo.filter((item, i) => {
                    return i!== index;
                }),
            });
        }
    }

    handleFilter(value) {
        this.setState({
            filter: value,
        });
    }
    render() {
        return(
            <div>
                <AddTodo handleSubmit={this.handleAddNewSubmit} />
                <ListTodo
                    data={this.state.todo}
                    filter={this.state.filter}
                    toggleComplete={this.handleToggleComplete}
                    handleDelete={this.handleDeleteTodo}
                />
                <FilterTodo
                    totalItems={this.state.todo.length}
                    handleFilter={this.handleFilter}
                />
            </div>
        );
    }
}

export default Todo;