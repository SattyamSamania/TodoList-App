import { useState, useEffect } from 'react';
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';
import { TodosProvider } from '@/context/TodosContext';

import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
 

  return (
    <TodosProvider>
    <div>
      <InputTodo  />
      <TodosList />
    </div>
    </TodosProvider>
  );
};
export default TodosLogic;
