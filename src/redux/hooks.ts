import {useSelector as useReduxSelector , TypedUseSelectorHook} from 'react-redux'
import { RootState } from './store'

// define the useSelector type in typescript
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;