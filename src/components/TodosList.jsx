import { useContext } from 'react';
import { useTodosContext } from '@/context/TodosContext';

import TodoItem from '@/components/TodoItem';
const TodosList = ({


}) => {

  const {todos } = useTodosContext();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
         
        />
      ))}
    </ul>
  );
};
export default TodosList;
