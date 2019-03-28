import React from 'react';

const hasController = (WrappedComponent) => {
    class Controller extends React.Component {
        state = {
            todoIdx: 0,
        }

        selectTodos = (idx) => () => {
            this.setState({ todoIdx: idx });
        }

        render() {
            return (
                <WrappedComponent 
                    todoIdx={this.state.todoIdx}
                    selectTodos={this.selectTodos}
                />
            )   
        }
    }

    return Controller;
}

export default hasController;