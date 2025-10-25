// Основной тип для Todo
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
}

// Тип для создания нового Todo (без id и created_at)
export type CreateTodoDto = {
  title: string;
  completed?: boolean;
};

// Тип для обновления Todo
export type UpdateTodoDto = {
  title?: string;
  completed?: boolean;
};

// Тип для фильтров
export type FilterType = "all" | "active" | "completed";

// Пропсы для компонентов (добавим позже)
export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}
