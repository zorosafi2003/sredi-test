import { Routes } from "@angular/router";
import { DashboardComponent } from "./admin/views/dashboard/dashboard.component";
import { ModulesLibComponent } from "./modules-lib.component";

export const modulesLibRoutes: Routes = [

    {
        path: '',
        component: ModulesLibComponent,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import("./admin/views/dashboard/dashboard.component").then(x=>x.DashboardComponent) ,
                title: 'Dashboard'
            }
        ]
    }

]