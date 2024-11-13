import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, computed, DestroyRef, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { operationActions } from '../../../../../core-lib/src/lib/stores/states/operations/operation.action';
import { operationSelectors } from '../../../../../core-lib/src/lib/stores/states/operations/operation.selector';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakPointService } from '../../../../../core-lib/src/lib/settings/break-point.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarCustomFormInterface } from '../form-interfaces/navbar-custom.form-interface';

@Component({
  selector: 'lib-navbar-custom',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatButtonModule, MatBadgeModule, CommonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatDividerModule ,ReactiveFormsModule],
  templateUrl: './navbar-custom.component.html',
  styleUrl: './navbar-custom.component.scss'
})
export class NavbarCustomComponent implements AfterViewInit {

  rForm!: FormGroup<NavbarCustomFormInterface>;
  isCollapsed = signal<boolean>(false);
  isSmallScreen = computed(() => this._BreakPointService.isSmallScreen());
  sidenavWidth = computed(() => this.isCollapsed() == false ? "280px" : "0px");

  get fCtrls(){
    return this.rForm.controls;
  }

  constructor(private _Store: Store, private _DestroyRef: DestroyRef,
    private _BreakPointService: BreakPointService, private _FormBuilder: FormBuilder) {
    this._Store.select(operationSelectors.isCollapsed).pipe(takeUntilDestroyed(this._DestroyRef)).subscribe(value => {
      this.isCollapsed.set(value);
    });

    this.rForm = this._FormBuilder.group<NavbarCustomFormInterface>({
      search: new FormControl(null),
      dateFrom: new FormControl(new Date("1/1/2023")),
      dateTo: new FormControl(new Date("12/31/2023")),
    })
  }

  ngAfterViewInit(): void {
  }

  onToggleCollapsed() {
    this.isCollapsed.update(x => !x);
    this._Store.dispatch(operationActions.toggleSidebar({ isCollapsed: this.isCollapsed() }));
  }

}
