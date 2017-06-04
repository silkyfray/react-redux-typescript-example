import axios from "axios"

import * as api from "../../shared/apiEndpoints"
import * as actions from "../actions"
import { AppState, GridState, GridDataState } from "../models/state"

const limit: number = 6;

export function loadDesigns(approval: boolean) {
    let promise = (dispatch, getState) => {
        let appState: AppState = getState();
        let dataState = approval ? appState.grid.approval : appState.grid.catalog;
        axios.get(api.kApiReadDesigns, {
            params: {
                skip: dataState.skip, limit: limit, approval: approval
            }
        })
            .then(data => {
                approval ? dispatch(actions.designGridActions.populateApprovalGrid(data.data))
                    : dispatch(actions.designGridActions.populateCatalogGrid(data.data))

            })
            .catch(err => dispatch(actions.designGridActions.reportFetchError(err)))
    }
    return promise;
}
