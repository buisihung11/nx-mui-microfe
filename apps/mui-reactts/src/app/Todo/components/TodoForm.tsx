import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <TextField
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
          variant="outlined"
        />
        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
          Add
        </Button>
      </Box>
    </form>
  );
};

export default TodoForm;

