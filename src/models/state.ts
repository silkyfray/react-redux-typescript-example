import * as requestInterface from "./requestInterface"

export interface AppState {
    catalog: CatalogState,
    approval: ApprovalGridState
}

export interface ApprovalGridState {
    designs: requestInterface.IDesignData[],
    skip: number,
    hasMore: boolean
}

export interface CatalogState {
    dummy: string
} 