import GridReducer from "./GridReducer"
import { reducer as formReducer } from 'redux-form'

import * as designActions from "../actions/designFormActions"


const reducers = {
    grid: GridReducer,
    form: formReducer
}

export default reducers;