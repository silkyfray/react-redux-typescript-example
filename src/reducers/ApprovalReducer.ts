import { ApprovalGridState } from "../models/state"
import { IDesignData } from "../models/requestInterface"
import { designGridActions } from "../actions"

let defaultState: ApprovalGridState = { designs: [] }

const ApprovalReducer = (state: ApprovalGridState = defaultState, action: designGridActions.DesignGridAction): ApprovalGridState => {
    switch (action.type) {
        case designGridActions.Type.PopulateApprovalGrid:
            {
                let newState: ApprovalGridState =
                 {
                     designs: action.data || []
                 };
            return newState;

            }
        case designGridActions.Type.ReportFetchError:
            return defaultState;
    }
    return state;
}

export default ApprovalReducer;

