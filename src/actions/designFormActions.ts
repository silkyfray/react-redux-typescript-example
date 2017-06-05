import * as Redux from "redux"

export const Type = {
    LoadApprove: "LoadApprove",
}

export interface DesignFormAction extends Redux.Action {
    type: any,
    designId: string
}

export const loadApprove = (designId: string): DesignFormAction => {
    return {
        type: Type.LoadApprove,
        designId: designId
    }
}
