import { VISIBILITY_FILTERS } from "../constants";
import { Store, TodoItem } from '../interface/TodoInterface'


export const getTodosState = (store: Store) => store.todos;

export const getTodoList = (store: Store) =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store: Store, id: number): TodoItem | null =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : null;


export const getTodos = (store: Store) =>
  getTodoList(store).map((id: number) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store: Store, visibilityFilter: string) => {
  const allTodos = getTodos(store);
  debugger
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo?.complete);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo: any) => !todo.complete);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
