import { Component, Signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import { sharedDataSelectors } from '../../../../../../core-lib/src/lib/stores/states/shared-data/shared-data.selector';
import { DatePipe } from '@angular/common';
import { OverallHoursComponent } from '../../components/overall-hours/overall-hours.component';
import { EmployeeSummaryComponent } from '../../components/employee-summary/employee-summary.component';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [MatChipsModule ,DatePipe ,OverallHoursComponent ,EmployeeSummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  navbarDateFrom: Signal<Date | null>; 
  navbarDateTo: Signal<Date | null>; 

  constructor(private _Store: Store) {
    this.navbarDateFrom = this._Store.selectSignal(sharedDataSelectors.navbarDateFrom);
    this.navbarDateTo = this._Store.selectSignal(sharedDataSelectors.navbarDateTo);
  }

}
