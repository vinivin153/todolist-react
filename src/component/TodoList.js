import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemove, onCheck, onEdit }) {
  console.log('List 렌더링..!');

  return (
    <div>
      <p>Todo List</p>
      <hr />
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onCheck={onCheck}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
