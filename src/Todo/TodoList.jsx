import React, {Component} from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        }, () => console.log(this.state.userInput))
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
           items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(event) {
        event.preventDefault()
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)}>X</button>
                </div>
            );
        });
    }

    render() {
        return(
        <div>
            <h1>Ma Todo list</h1>
            <form>
                <input
                    value={this.state.userInput}
                    type="text"
                    placeholder="Renseigner un item"
                    onChange={this.onChange.bind(this)}
                />

                <button onClick={this.addTodo.bind(this)}>Ajouter</button>
            </form>
            <div>
                {this.renderTodos()}
            </div>
        </div>
        );
    }
}

export default TodoList;
