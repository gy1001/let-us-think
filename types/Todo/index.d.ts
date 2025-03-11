export type TodoItemSchema = {
  label: string;
  id: number;
  checked: false;
};
export type ToDoListSchema = Array<TodoItemSchema>;
