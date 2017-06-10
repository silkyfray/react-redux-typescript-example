import { IDesignData } from "../models/state"
import { designFormActions } from "../actions"


const DesignFormReducer = (state: IDesignData, action: designFormActions.DesignFormAction): IDesignData => {
    state = state || {};
    switch (action.type) {
        case designFormActions.Type.LoadApprove:
            {
                return action.design || state;
            }
        case designFormActions.Type.LoadImageData:
            {
                return {...state, imageData: action.imageData} as IDesignData
            }
    }
    return state;
}


export default DesignFormReducer;

