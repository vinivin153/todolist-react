import styled from 'styled-components';
import { BiCheckbox, BiTrash, BiCheck } from 'react-icons/bi';
import { GrEdit } from 'react-icons/gr';
import React, { useState, useCallback } from 'react';

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  margin-right: 0.7rem;
  background-color: white;
  border-radius: 10px;
  height: 3rem;
  margin-bottom: 1rem;
`;

const CheckBox = styled(BiCheckbox)`
  // 나중에 viewBox 수정
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.35rem;
  cursor: pointer;
  transition: 0.1s ease-in;
  &:hover {
    background-color: gray;
  }
`;

const Todo = styled.p`
  flex: 0.75;
  font-size: 1.15rem;
`;

const EditButton = styled(GrEdit)`
  flex: 0.1;
  font-size: 1.15rem;
  cursor: pointer;
  path {
    stroke: darkslateblue;
  }
`;

const EditComplete = styled(BiCheck)`
  flex: 0.1;
  font-size: 1.15rem;
  cursor: pointer;
  path {
    stroke: greenyellow;
  }
`;

const RemoveButton = styled(BiTrash)`
  flex: 0.1;
  font-size: 1.15rem;
  cursor: pointer;
  color: gray;
`;

function TodoListItem({ todo, onRemove, onCheck, onEdit }) {
  console.log('Listitem 렌더링..!');

  const { id, text } = todo;
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const onChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);
  return (
    <Box>
      <CheckBox onClick={() => onCheck(id)} />
      {edit ? (
        <>
          <input type="text" value={inputValue} autoFocus onChange={onChange} />
          <EditComplete
            onClick={() => {
              onEdit(id, inputValue);
              setEdit(false);
            }}
          />
        </>
      ) : (
        <>
          <Todo>{text}</Todo>
          <EditButton onClick={() => setEdit(true)} />
        </>
      )}
      <RemoveButton onClick={() => onRemove(id)} />
    </Box>
  );
}

export default React.memo(TodoListItem);
