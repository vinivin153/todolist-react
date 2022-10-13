import styled from 'styled-components';
import { CgAddR } from 'react-icons/cg';
import { useCallback, useState } from 'react';

const Box = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 0.8;
  height: 1.5rem;
  padding: none;
  padding-left: 10px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  &:focus {
    outline: none;
  }
`;

const AddButton = styled(CgAddR)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.1s ease-in;
  &:hover {
    box-shadow: 0px 0px 10px 3px white; // 테두리 수정
    border-radius: 5px;
  }
`;

function TodoAdd({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const onChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [onAdd, inputValue]);

  return (
    <Box>
      <Input
        type="text"
        placeholder="Add a task..!"
        onChange={onChange}
        value={inputValue}
      />
      <AddButton onClick={onClick} />
    </Box>
  );
}

export default TodoAdd;
