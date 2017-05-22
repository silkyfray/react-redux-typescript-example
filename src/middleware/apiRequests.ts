import axios from "axios"

import * as api from "../../shared/apiEndpoints"
import * as actions from "../actions"

export function loadApprovalDesigns() {
    return (dispatch, getState) =>
        axios.get(api.kApiReadApprovals)
            .then(data =>{
              dispatch(actions.designGridActions.populateApprovalGrid(data.data))  
            } )
            .catch(err => dispatch(actions.designGridActions.reportFetchError(err)))
}
