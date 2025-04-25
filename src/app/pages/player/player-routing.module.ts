import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArenaComponent } from './arena/arena.component';
import { WalletComponent } from './wallet/wallet.component';
import { SabongHomeComponent } from './sabong-home/sabong-home.component';
import { WalletLogComponent } from './wallet-log/wallet-log.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // ✅ this is required
import { BetsComponent } from './bets/bets.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'arena', component: ArenaComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'sabong-home', component: SabongHomeComponent },
    { path: 'arena/:eventId', component: DashboardComponent },
    { path: 'wallet-logs', component: WalletLogComponent },
    { path: 'bets-history', component: BetsComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayerRoutingModule { }
