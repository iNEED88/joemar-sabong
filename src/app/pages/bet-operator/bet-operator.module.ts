import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetOperatorRoutingModule } from './bet-operator-routing.module';
import { BetOperatorComponent } from './bet-operator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
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
import { Pick3revertconsoleComponent } from './pick3revertconsole/pick3revertconsole.component';
import { Pick3revertlistComponent } from './pick3revertlist/pick3revertlist.component';
import { Pick3ConsoleComponent } from './pick3-console/pick3-console.component';
import { Pick3Component } from './pick3/pick3.component';

@NgModule({
  declarations: [
    BetOperatorComponent,
    DashboardComponent,
    MasterRevertComponent,
    ArenaListComponent,
    Pick2Component,
    Pick2ConsoleComponent,
    Lotto3dComponent,
    Lotto3dDashboardComponent,
    Ez2revertlistComponent,
    Ez2revertconsoleComponent,
    SuertresrevertlistComponent,
    SuertresrevertconsoleComponent,
    Pick3revertconsoleComponent,
    Pick3revertlistComponent,
    Pick3ConsoleComponent,
    Pick3Component,
  ],
  imports: [
    CommonModule,
    BetOperatorRoutingModule,
    FormsModule,
  ],
})
export class BetOperatorModule { }
