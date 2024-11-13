import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { OperationState } from "./operation.reducer";

const operationState = createFeatureSelector<OperationState>('operations');;

const isCollapsed = createSelector(operationState,(state:OperationState)=>state.isCollapsed);

export const operationSelectors = {
    isCollapsed
}