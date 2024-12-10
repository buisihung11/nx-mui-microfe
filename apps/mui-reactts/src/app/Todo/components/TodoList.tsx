import React from 'react';
import { List, Button, Box } from '@mui/material';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  toggleAllTodos: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo, toggleAllTodos }) => {
  return (
    <Box>
      <Button
        variant="outlined"
        onClick={toggleAllTodos}
        sx={{ mb: 2, width: '100%' }}
      >
        Toggle All
      </Button>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;

