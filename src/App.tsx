import { useState, useEffect } from "react";
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

  if (loading) return <h2 className="bg-black min-h-screen">Loading</h2>;

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <h1 className="text-3xl font-bold ">Todo List</h1>
    </div>
  );
}

export default App;
