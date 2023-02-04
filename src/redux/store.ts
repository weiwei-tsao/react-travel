import { createStore } from 'redux'
import { languageReducer } from './languageReducer'

const store = createStore(languageReducer)

// to get data type
export type RootState = ReturnType<typeof store.getState>

export default store