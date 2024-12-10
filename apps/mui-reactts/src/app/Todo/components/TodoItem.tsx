import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        // edge="start"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <ListItemText
        primary={todo.text}
        sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
    </ListItem>
  );
};

export default TodoItem;

