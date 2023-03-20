import { ADD_TODO, TOGGLE_TODO } from '../actionTypes'
import { TodoState, TodoAction } from  '../../interface/TodoInterface'


const initState: TodoState = {
    allIds: [],
    byIds: {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, action: TodoAction): TodoState {
    switch (action.type) {
        case ADD_TODO: {
            // debugger
            const { id, content } = action.payload
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        complete: false
                    }
                }
            }
        }
        case TOGGLE_TODO: {
            debugger
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [action.payload.id]: {
                        ...state.byIds[action.payload.id],
                        complete: !state.byIds[action.payload.id].complete
                    }
                }
            }
        }
        default:
            return state;
    }
}