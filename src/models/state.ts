import * as requestInterface from "./requestInterface"

export interface AppState {
    catalog: CatalogState,
    approval: ApprovalGridState
}

export interface ApprovalGridState {
    designs: requestInterface.IDesignData[]
}

export interface CatalogState {
    dummy: string
} 