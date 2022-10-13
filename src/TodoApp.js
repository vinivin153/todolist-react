import styled from 'styled-components';
import TodoAdd from './component/TodoAdd';
import TodoComplete from './component/TodoComplete';
import TodoList from './component/TodoList';
import { useCallback, useRef, useState } from 'react';

const Template = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  border-radius: 18px;
  overflow: hidden;
  background-color: #ffc0cb;
`;

const TodoTitle = styled.div`
  color: white;
  margin: 1rem;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  margin: 2rem;
  margin-top: 1rem;
`;

function TodoApp() {
  console.log('APP 렌더링..!');
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: '5km 달리기',
    },
    {
      id: 2,
      text: '리액트 공부하기',
    },
    {
      id: 3,
      text: '알고리즘 문제 풀기',
    },
  ]);

  const [completeList, setCompleteList] = useState([
    {
      id: 1,
      text: 'TodoList 프로젝트 구상하기',
    },
    {
      id: 2,
      text: '도서 반납하기',
    },
  ]);

  const todoId = useRef(4);
  const completeId = useRef(4);

  const onAdd = useCallback(
    (text) => {
      console.log('추가');
      const todo = {
        id: todoId.current,
        text, // key와 value 값이 같으면 하나만 써줘도 된다! ES6문법
      };
      setTodoList([...todoList, todo]);
      todoId.current++;
    },
    [todoList]
  );

  const onRemove = useCallback((id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  }, []);

  const onCheck = useCallback((id) => {
    const completeTodo = {
      id: -1,
      text: '',
    };
    setTodoList((todoList) =>
      todoList.filter((todo) => {
        if (todo.id === id) {
          completeTodo.id = completeId.current;
          completeTodo.text = todo.text;
          completeId.current++;
        }
        return todo.id !== id;
      })
    );
    setCompleteList((completeList) => [...completeList, completeTodo]);
  }, []);

  const onEdit = useCallback((id, text) => {
    setTodoList((todoList) =>
      todoList.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  }, []);

  return (
    <Template>
      <TodoTitle>Todo List</TodoTitle>
      <Content>
        <TodoAdd onAdd={onAdd} />
        <TodoList
          todoList={todoList}
          onRemove={onRemove}
          onCheck={onCheck}
          onEdit={onEdit}
        />
        <TodoComplete completeList={completeList} />
      </Content>
    </Template>
  );
}

export default TodoApp;
