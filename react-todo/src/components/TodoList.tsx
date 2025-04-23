type TodoListProps = {
  items: { id: string; text: string }[];
  onDelete: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  return (
    <div className="my-10 space-y-3">
      {items.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 p-3 rounded shadow-sm"
        >
          <span className="text-gray-800">{todo.text}</span>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
