import { supabase } from "./supabase";
import type { Todo, CreateTodoDo, UpdateTodoDo } from "../types";

// Получить все todos
export const fetchTodos = async (): Promise<Todo[]> => {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
};

// Создать новый todo
export const createTodo = async (todo: CreateTodoDo): Promise<Todo> => {
  const { data, error } = await supabase
    .from("todos")
    .insert([todo]) // ← Оборачиваем в массив
    .select()
    .single(); // ← Возвращаем один элемент, не массив

  if (error) throw error;
  return data;
};

// Обновить todo
export const updateTodo = async (
  id: string,
  updates: UpdateTodoDo
): Promise<Todo> => {
  const { data, error } = await supabase
    .from("todos")
    .update(updates)
    .eq("id", id) // ← Ищем по id!
    .select("*")
    .single();

  if (error) throw error;
  return data;
};

// Удалить todo
export const deleteTodo = async (id: string): Promise<void> => {
  const { error } = await supabase
    .from("todos")
    .delete() // ← DELETE, а не update!
    .eq("id", id);

  if (error) throw error;
};

// Toggle completed status
export const toggleTodo = async (
  id: string,
  completed: boolean
): Promise<Todo> => {
  return updateTodo(id, { completed }); // ← Переиспользуем updateTodo!
};
