import React, {PureComponent} from 'react'
import './css/reset.css';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// importing Component
import Header from './component/header/header'
import AddTodo from './component/AddTodo'
import Todo from './component/todo'


class App extends PureComponent {

    state = {
        todos: [],
        done: false,
    }


    AddTodoText(text) {

        this.setState(prevState => {
            return {
                todos: [...prevState.todos, {key: Date.now(), done: false, text}],
            }
        })
    }

    deleteTodo(key) {
        let {todos} = this.state;

        let itemCheck = todos.find(item => item.key == key);

        let items = todos.filter(item => item !== itemCheck);
        this.setState({
            todos: items,
        })
    }

    doneTodo(key) {
        let {todos} = this.state;
        let itemCheck = todos.find(item => item.key == key);

        console.log('itemCheck' , itemCheck);

        itemCheck.done = !itemCheck.done;





       this.setState((prevState) => {
           return {
               todos: [...prevState.todos.filter(item => item !== itemCheck) , itemCheck]
           }
       })

    }


    render() {

        let {todos, done} = this.state;

        let todosFilter = todos.filter(item => item.done == done);
        console.log('todos', todos)


        return (
            <div>

                <Header/>

                <div className="Main-input bg-light d-flex justify-content-center p-5">
                    <AddTodo getText={this.AddTodoText.bind(this)}/>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                    <nav className="w-25">
                        <div className="nav nav-tabs">
                            <a className={`nav-item nav-link ${done ? '' : 'active'}`} onClick={() => {
                                this.setState({done: false})
                            }}>undone<span
                                className="badge badge-warning">4</span></a>
                            <a className={`nav-item nav-link ${done ? 'active' : ''}`} onClick={() => {
                                this.setState({done: true})
                            }}>done<span className="badge badge-success">4</span></a>
                        </div>
                    </nav>
                    <div className="tab-content w-25 mt-3">
                        {
                            todosFilter.length == 0
                                ? <p>not item</p>
                                : todosFilter.map((item) => <Todo key={item.key} DTodo={this.doneTodo.bind(this)}
                                                                  distroy={this.deleteTodo.bind(this)}
                                                                  data={item}/>)
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default App;
