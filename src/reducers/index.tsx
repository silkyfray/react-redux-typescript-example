import GridReducer from "./GridReducer"
import { reducer as formReducer } from 'redux-form'


const reducers = {
    grid: GridReducer,
    form: formReducer
}

export default reducers;