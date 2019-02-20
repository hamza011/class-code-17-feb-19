import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((item) => {
                            return <li key={item.id}>{item.content}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return { todos: state.todos.slice(0) }
    },
    null
)(TodoList);