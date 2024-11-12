import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:()=> import('../../projects/modules-lib/src/lib/modules-lib.routes').then(x=>x.modulesLibRoutes)
    }
];
