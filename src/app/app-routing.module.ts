import { StarshipsComponent } from './starships/starships.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'starships', component: StarshipsComponent, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule  },

    // otherwise redirect to home
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }