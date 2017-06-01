import { ApprovalGridState } from "../models/state"
import { IDesignData } from "../models/requestInterface"
import { designGridActions } from "../actions"

let defaultState: ApprovalGridState = { designs: [], skip: 0, hasMore: true }

const ApprovalReducer = (state: ApprovalGridState = defaultState, action: designGridActions.DesignGridAction): ApprovalGridState => {
    let data =  action.data || [];
    switch (action.type) {
        case designGridActions.Type.PopulateApprovalGrid:
            {
                let newState: ApprovalGridState =
                 {
                     designs: state.designs.concat(data),
                     skip: state.skip + data.length,
                     hasMore: data.length > 0
                 };
            return newState;

            }
        case designGridActions.Type.ReportFetchError:
            return defaultState;
    }
    return state;
}

export default ApprovalReducer;

