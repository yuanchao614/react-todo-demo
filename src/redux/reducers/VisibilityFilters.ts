
import { VISIBILITY_FILTERS  } from '../../constants'
import { SET_FILTER } from '../actionTypes'
import { FilterAction } from  '../../interface/TodoInterface'

const initState: string = VISIBILITY_FILTERS.ALL

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initState, action: FilterAction): string {
    debugger
    switch (action.type) {
        case SET_FILTER: {
            return action.payload.filter
        }
        default: {
            return state
        }
    }
}