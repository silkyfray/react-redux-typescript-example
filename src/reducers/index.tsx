import GridReducer from "./GridReducer"
import DesignFormReducer from "./DesignFormReducer"
import { reducer as formReducer } from 'redux-form'

const reducers = {
    grid: GridReducer,
    // this is used to initialise the form state
    loadedDesign: DesignFormReducer,
    // this is internally used by redux-form
    form: formReducer
}

export default reducers;