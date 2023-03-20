import { legacy_createStore as createStore } from 'redux'

import RootStore from './reducers/index'

export default createStore (RootStore)