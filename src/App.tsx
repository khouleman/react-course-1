import React, {Component} from 'react';
import TodoList from "./Todo/TodoList";

// let idCard = '1';
// let titleCard = 'Salut';
// let descriptionCard = 'description';
// let priorityCard = '0';
// let assignedToCard = 'list 1';
//
// const card = {
//     id: idCard,
//     title: titleCard,
//     description: descriptionCard,
//     priority: priorityCard,
//     assignedTo: assignedToCard
// };

class App extends Component {
    render() {
        return(
           <TodoList/>
        );
    }
}

export default App;
