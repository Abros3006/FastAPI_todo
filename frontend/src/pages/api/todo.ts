import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/todos';

export const getTodos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
  };
  
  export const getTodo = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  };
  
  export const createTodo = async (todo: { title: string; description: string }) => {
    const response = await axios.post(API_URL, todo);
    return response.data;
  };
  
  export const updateTodo = async (id: number, todo: { title: string; description: string }) => {
    const response = await axios.put(`${API_URL}/${id}`, todo);
    return response.data;
  };
  
  export const deleteTodo = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
  };