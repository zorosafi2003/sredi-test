import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SharedDataState } from "./shared-data.reducer";

const sharedDataState = createFeatureSelector<SharedDataState>('shared-data');;

const navbarDateFrom = createSelector(sharedDataState,(state:SharedDataState)=>state.navbarDateFrom);
const navbarDateTo = createSelector(sharedDataState,(state:SharedDataState)=>state.navbarDateTo);

export const sharedDataSelectors = {
    navbarDateFrom ,
    navbarDateTo
}