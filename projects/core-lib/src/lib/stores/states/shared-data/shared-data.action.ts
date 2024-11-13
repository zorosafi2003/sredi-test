import { createAction, props } from "@ngrx/store";

const setNavbarDateFrom = createAction('[Shared Data] Set Navbar Date From', props<{ dateFrom: Date|null }>());
const setNavbarDateTo = createAction('[Shared Data] Set Navbar Date To', props<{ dateTo: Date|null }>());

export const sharedDataActions = {
    setNavbarDateFrom ,
    setNavbarDateTo
}