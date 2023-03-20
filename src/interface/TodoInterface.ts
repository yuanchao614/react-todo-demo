export interface TodoItem {
    content: string
    complete: boolean,
    id?: number
}

export interface TodoState {
    allIds: number[]
    byIds: {
        [key: number]: TodoItem
    }
}

export interface TodoAction {
    type: 'ADD_TODO' | 'TOGGLE_TODO',
    payload: Record<string, any>
}


export interface FilterAction {
    type: string,
    payload: {
        filter: string
    }
}

export interface Store {
    todos: TodoState,
    visibilityFilter: string
}

