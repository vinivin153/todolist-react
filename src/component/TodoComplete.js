import TodoCompleteItem from './TodoCompleteItem';
import React from 'react';

function TodoComplete({ completeList }) {
  console.log('Complete 렌더링..!');

  return (
    <div>
      <p>Complete List</p>
      <hr />
      {completeList.map((complete) => (
        <TodoCompleteItem key={complete.id} complete={complete} />
      ))}
    </div>
  );
}

export default React.memo(TodoComplete);
