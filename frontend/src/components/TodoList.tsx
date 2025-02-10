"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function TodoList() {
  const { isLoading, error, data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await axios.get("http://127.0.0.1:8000/todos");
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) return <p>An error has occurred: {error.message}</p>;

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos?.map((todo: { id: number; title: string; description: string }) => (
          <li key={todo.id}>
            {todo.title} - {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
