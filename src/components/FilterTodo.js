import React, { Component } from 'react';

class FilterTodo extends Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(value) {
        return () => {
            let filterValue = 'all';
            switch (value) {
                case 'active':
                    filterValue = false;
                    break;
                case 'completed':
                    filterValue = true;
                    break;
                default:
                    break;
            }
            this.props.handleFilter(filterValue);
        };
    }

    render() {
        return(
            <div className="d-flex align-items-center justify-content-between">
                <span>{this.props.totalItems} Item left</span>
                <div>
                    <button className="btn" onClick={this.handleFilter('all')}>All</button>
                    <button className="btn" onClick={this.handleFilter('active')}>Active</button>
                    <button className="btn" onClick={this.handleFilter('completed')}>Completed</button>
                </div>
                <button className="btn">Clear Completed</button>
            </div>
        );
    }
}

export default FilterTodo;