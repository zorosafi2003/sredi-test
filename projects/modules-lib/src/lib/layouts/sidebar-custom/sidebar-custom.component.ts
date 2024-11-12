import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenuItemDto } from '../../../../../core-lib/src/lib/dtos/menu-item.dto';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-sidebar-custom',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, MatButtonModule , CommonModule ,MatListModule,RouterModule],
  templateUrl: './sidebar-custom.component.html',
  styleUrl: './sidebar-custom.component.scss'
})
export class SidebarCustomComponent {

  menuItemArr = signal<MenuItemDto[]>([
    {
      label: 'Overview',
      route: '/dashboard',
      icon: 'dashboard',
      isShowChildren: false,
      children: []
    },
    {
      label: 'Navigation02',
      route: '/navigation02',
      icon: 'storefront',
      isShowChildren: true,
      children: [
        {
          label: 'Navigation03',
          route: '/navigation03',
          icon: 'description',
          isShowChildren: false,
          children: []
        },
        {
          label: 'Navigation04',
          route: '/navigation04',
          icon: 'group',
          isShowChildren: false,
          children: []
        },
        {
          label: 'Navigation06',
          route: '/navigation06',
          icon: 'show_chart',
          isShowChildren: false,
          children: []
        }
      ]
    }
  ]);

}
