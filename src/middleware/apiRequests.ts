import axios from "axios"

import * as api from "../../shared/apiEndpoints"
import * as actions from "../actions"
import { AppState, GridState, GridDataState } from "../models/state"
import { IDesignData } from "../models/state"

const limit: number = 6;

export function loadDesigns(approval: boolean) {
    let promise = (dispatch, getState) => {
        let appState: AppState = getState();
        let dataState = approval ? appState.grid.approval : appState.grid.catalog;
        axios.get(api.kApiReadDesigns, {
            params: {
                skip: dataState.skip, limit: limit, approval: approval
            }
        }).then(data => {
            approval ? dispatch(actions.designGridActions.populateApprovalGrid(data.data))
                : dispatch(actions.designGridActions.populateCatalogGrid(data.data))

        })
        // TODO: do reporting
        .catch(err => {
            let x = 0;
            // dispatch(actions.designGridActions.reportFetchError(err))
        })
    }
    return promise;
}

export function readDesign(designId: string) {
    let promise = (dispatch, getState) => {
        axios.get(api.kApiReadDesign, {
            params: {
                designId: designId
            }
        }).then(data => {
            dispatch(actions.designFormActions.loadApprove(data.data))
        })
        // TODO: do reporting
        .catch(err => {
            let x = 0;
            //dispatch(actions.designGridActions.reportFetchError(err))
        })
    }
    return promise;
}

export function updateDesign(design: IDesignData) {
    let promise = (dispatch, getState) => {
        axios.put(api.kApiSubmitDesign, {
            params: {
                design: design
            }
        }).then(result => {
            console.log("Updated design")
        })
        // TODO: do reporting
        .catch(err => {
            let x = 0;
            //dispatch(actions.designGridActions.reportFetchError(err))
        })
    }
    return promise;
}
