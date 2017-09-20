import React from 'react'
import {connect} from 'react-redux'

const TodoItem = ({id, name, isComplete}) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} />{name}
  </li>
);

// console log return undefined, so with stateless components this is a good way to debug
const TodoList = (props) => (
  <div className="Todo-List">
    <ul>
      {props.todos.map(todo => <TodoItem key={todo.id}  {...todo} />)}
    </ul>
  </div>
)

export default connect(
  (state) => ({todos: state.todos})
)(TodoList)
