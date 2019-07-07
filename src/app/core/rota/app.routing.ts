import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from '../../modules/module-login/login/login.component';
import { PagenotfoundComponent } from '../../shared/pagenotfound/pagenotfound.component';

const APP_ROUTES : Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },    
    { path: '**', component: PagenotfoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
