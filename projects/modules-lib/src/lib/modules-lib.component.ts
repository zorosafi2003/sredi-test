import { AfterViewInit, ChangeDetectionStrategy, Component, computed, effect, signal, Signal, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarCustomComponent } from './layouts/sidebar-custom/sidebar-custom.component';
import { NavbarCustomComponent } from './layouts/navbar-custom/navbar-custom.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { Store } from '@ngrx/store';
import { operationSelectors } from '../../../core-lib/src/lib/stores/states/operations/operation.selector';
import { AppState } from '../../../core-lib/src/lib/stores/states/app.state';
import { BreakPointService } from '../../../core-lib/src/lib/settings/break-point.service';
import { operationActions } from '../../../core-lib/src/lib/stores/states/operations/operation.action';
@Component({
  selector: 'lib-modules-lib',
  standalone: true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [RouterOutlet, MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule, MatBadgeModule
    , SidebarCustomComponent, NavbarCustomComponent, CommonModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule, MatDividerModule],
  templateUrl: './modules-lib.component.html',
  styleUrl: './modules-lib.component.scss'
})
export class ModulesLibComponent implements AfterViewInit {

  isCollapsed: Signal<boolean>;
  sidenavWidth = computed(() => this.isCollapsed() == false ? "280px" : "0px");
  isSmallScreen = computed(() => this._BreakPointService.isSmallScreen());

  changeSidenavEffect = effect(() => {
    if (this.isSmallScreen()) {
      if (this.isCollapsed()) {
        this.sideNav.close();
      }
      else {
        this.sideNav.open();
      }
    }
    else {
      this.sideNav.open();
    }
  })

  @ViewChild('sideNav') sideNav!: MatSidenav;

  constructor(private _Store: Store, private _BreakPointService: BreakPointService) {
    this.isCollapsed = this._Store.selectSignal(operationSelectors.isCollapsed);
  }

  ngAfterViewInit(): void {
    this.sideNav.openedChange.subscribe(value => {
      const isCollapsed = value != true;
      this._Store.dispatch(operationActions.toggleSidebar({ isCollapsed: isCollapsed }))
    })
  }
}
