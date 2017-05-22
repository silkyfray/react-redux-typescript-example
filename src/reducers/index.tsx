import CatalogReducer from "./CatalogReducer"
import ApprovalReducer from "./ApprovalReducer"
import { reducer as formReducer } from 'redux-form'


const reducers = {
    catalog: CatalogReducer,
    approval: ApprovalReducer,
    form: formReducer
}

export default reducers;