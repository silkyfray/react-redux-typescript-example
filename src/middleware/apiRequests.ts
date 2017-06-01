import axios from "axios"

import * as api from "../../shared/apiEndpoints"
import * as actions from "../actions"
import * as state from "../models/state"

const limit: number = 6;

export function loadApprovalDesigns() {
    let promise = (dispatch, getState) => {
        let appState: state.AppState = getState();
        axios.get(api.kApiReadApprovals, {params: {skip: appState.approval.skip, limit: limit}})
            .then(data =>{
              dispatch(actions.designGridActions.populateApprovalGrid(data.data))  
            } )
            .catch(err => dispatch(actions.designGridActions.reportFetchError(err)))
    }
    return promise;

}
