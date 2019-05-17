import React, { Component } from 'react';

class ListTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            filter: this.props.filter,
        };
    }

    shouldComponentUpdate(nextProps){
        return nextProps.data !== this.state.data || nextProps.filter !== this.state.filter;
    }

    componentDidUpdate(props){
        this.setState({
            data: props.data,
            filter: props.filter
        });
    }

    render() {
        return(
            <ul className="list-unstyled">
                {this.state.data.map((item, index) => <li className={'todo-item d-flex align-items-center mb-2 ' + (item.isCompleted ? 'completed' : '')} key={index}>
                    <button className="btn btn-success" onClick={this.props.toggleComplete(index)}>Done</button>
                    <span className="todo-title w-100 mr-2 ml-2 mb-0">{item.title}</span>
                    <button className="btn btn-danger" onClick={this.props.handleDelete(index)}>Delete</button>
                </li>)}
            </ul>
        );
    }
}

export default ListTodo;