import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let target = event.target.todoTitle;
        if (target.value && target.value.trim()) {
            this.props.handleSubmit(target.value);
            target.value = '';
        }
    }

    render() {
        return(
            <form className="mb-3" onSubmit={this.handleSubmit}>
                <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-primary mr-2">Select all</button>
                    <input type="text" name="todoTitle" className="form-control border-0" placeholder="Add something to do"/>
                </div>
            </form>
        );
    }
}

export default AddTodo;