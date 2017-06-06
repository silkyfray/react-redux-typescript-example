import * as requestInterface from "./requestInterface"

export interface AppState {
    grid: GridState,
    designForm: requestInterface.IDesignData
}

export interface GridState {
    catalog: GridDataState,
    approval: GridDataState,
}

export interface GridDataState {
    data: requestInterface.IDesignData[],
    skip: number,
    hasMore: boolean
}


