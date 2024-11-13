import { createReducer, on } from "@ngrx/store";
import { sharedDataActions } from "./shared-data.action";

export interface SharedDataState {
    navbarDateFrom: Date | null;
    navbarDateTo: Date | null;
}

const initialSharedDataState: SharedDataState = {
    navbarDateFrom: null,
    navbarDateTo: null
};

const _sharedDataReducer = createReducer(
    initialSharedDataState,
    on( sharedDataActions.setNavbarDateFrom, (state, props) => {
        return {
            ...state,
            navbarDateFrom: props.dateFrom
        }
    }),
    on( sharedDataActions.setNavbarDateTo, (state, props) => {
        return {
            ...state,
            navbarDateTo: props.dateTo
        }
    })
)

export function sharedDataReducer(state: any, action: any) {
    return _sharedDataReducer(state, action)
}