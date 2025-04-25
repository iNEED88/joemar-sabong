import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    IsBetOperator1GuardService,
    IsBetOperator2GuardService,
} from 'src/app/services/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterRevertComponent } from './master-revert/master-revert.component';
import { ArenaListComponent } from './arena-list/arena-list.component';
import { Pick2Component } from './pick2/pick2.component';
import { Pick2ConsoleComponent } from './pick2-console/pick2-console.component';
import { Lotto3dComponent } from './lotto3d/lotto3d.component';
import { Lotto3dDashboardComponent } from './lotto3d-dashboard/lotto3d-dashboard.component';
import { Ez2revertlistComponent } from './ez2revertlist/ez2revertlist.component';
import { Ez2revertconsoleComponent } from './ez2revertconsole/ez2revertconsole.component';
import { SuertresrevertlistComponent } from './suertresrevertlist/suertresrevertlist.component';
import { SuertresrevertconsoleComponent } from './suertresrevertconsole/suertresrevertconsole.component';

import { Pick3Component } from './pick3/pick3.component';
import { Pick3ConsoleComponent } from './pick3-console/pick3-console.component';
import { Pick3revertlistComponent } from './pick3revertlist/pick3revertlist.component';
import { Pick3revertconsoleComponent } from './pick3revertconsole/pick3revertconsole.component';



const routes: Routes = [


    {
        path: 'master-revert',
        component: MasterRevertComponent,
        canActivate: [IsBetOperator1GuardService],
    },


    {
        path: 'arena',
        component: ArenaListComponent,
    },
    {
        path: 'arena/:id',
        component: DashboardComponent,
    },

    {
        path: 'pick2',
        component: Pick2Component,
    },
    {
        path: 'pick2/console/:id',
        component: Pick2ConsoleComponent
        ,
    },

    {
        path: '3d-lotto',
        component: Lotto3dComponent
        ,
    },
    {
        path: '3d-lotto/console/:id',
        component: Lotto3dDashboardComponent
        ,
    },


    {
        path: 'pick3',
        component: Pick3Component
        ,
    },
    {
        path: 'pick3/console/:id',
        component: Pick3ConsoleComponent
        ,
    },


    {
        path: 'pick3-masterrevert-list',
        component: Pick3revertlistComponent
        ,
    },


    {
        path: 'pick3-revert/console/:id',
        component: Pick3revertconsoleComponent

    },



    {
        path: 'ez2revert-list',
        component: Ez2revertlistComponent
        ,
    },

    {
        path: 'ez2revert/console/:id',
        component: Ez2revertconsoleComponent

    },
    {
        path: '3d-lotto-revert-list',
        component: SuertresrevertlistComponent

    },
    {
        path: '3dlottorevert/console/:id',
        component: SuertresrevertconsoleComponent

    },



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BetOperatorRoutingModule { }
