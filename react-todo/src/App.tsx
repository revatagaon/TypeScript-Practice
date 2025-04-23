import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { Todo } from './types/todo-type';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, { id, text }]);
  }

  const deleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo:Todo) => todo.id !== id);
    // setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setTodos(filteredTodos);
  };
  return (
    <main className='max-w-6xl mx-auto '>
      <AddTodo onTodoAdd={addTodoHandler} />
      <TodoList items={todos} onDelete={deleteTodo} />
    </main>
  )
}

export default App
