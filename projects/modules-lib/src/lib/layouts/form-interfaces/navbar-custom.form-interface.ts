import { FormControl } from "@angular/forms";

export interface NavbarCustomFormInterface {
    search: FormControl<string|null>;
    dateFrom: FormControl<Date|null>;
    dateTo: FormControl<Date|null>;
}