import { createReducer, on } from "@ngrx/store";
import { operationActions } from "./operation.action";

export interface OperationState {
    isCollapsed: boolean;
}

const initialOperationState: OperationState = {
    isCollapsed: false
};

const _operationReducer = createReducer(
    initialOperationState,
    on(operationActions.toggleSidebar, (state, props) => {
        return {
            ...state,
            isCollapsed: props.isCollapsed
        }
    })
)

export function operationReducer(state: any, action: any) {
    return _operationReducer(state, action)
}