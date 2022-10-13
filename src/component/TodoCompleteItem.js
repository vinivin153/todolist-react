import styled from 'styled-components';
import { BiCheckboxChecked } from 'react-icons/bi';
import React from 'react';

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

const CheckedBox = styled(BiCheckboxChecked)`
  // 나중에 viewBox 수정
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.35rem;
`;

const Complete = styled.p`
  font-size: 1.15rem;
`;

function TodoCompleteItem({ complete }) {
  console.log('Completeitem 렌더링..!');

  return (
    <Box>
      <CheckedBox />
      <Complete>{complete.text}</Complete>
    </Box>
  );
}

export default React.memo(TodoCompleteItem);
