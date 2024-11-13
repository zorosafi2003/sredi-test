import { createAction, props } from "@ngrx/store";

const toggleSidebar = createAction('[Operations] Is Toggle Sidebar', props<{ isCollapsed: boolean }>());

export const operationActions = {
    toggleSidebar
}