import CatalogReducer from "./CatalogReducer"
import { reducer as formReducer } from 'redux-form'


const reducers = {
    catalog: CatalogReducer,
    form: formReducer
}

export default reducers;