import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav'
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
@Component({
  selector: 'lib-modules-lib',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterOutlet, MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule ,MatBadgeModule
    , SidebarCustomComponent, NavbarCustomComponent, CommonModule ,MatFormFieldModule ,MatInputModule ,
    MatDatepickerModule ,MatDividerModule],
  templateUrl: './modules-lib.component.html',
  styleUrl: './modules-lib.component.scss'
})
export class ModulesLibComponent {

  isCollapsed = signal<boolean>(false);
  sidenavWidth = computed(()=> this.isCollapsed() == false ? "280px" : "0px")

  onToggleCollapsed() {
    this.isCollapsed.update(x => !x)
  }

}
