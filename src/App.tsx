import { useEffect, useState } from "react";
import { fetchTodos } from "./api/todos";
import type { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos()
      .then(setTodos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Todo List</h1>
      <p className="text-gray-600">Connected! Todos count: {todos.length}</p>
    </div>
  );
}

export default App;
