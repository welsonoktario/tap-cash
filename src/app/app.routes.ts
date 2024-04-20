import { Routes } from '@angular/router';

import { authGuard } from '@app/guards/auth.guard';

import { LoginComponent } from '@app/components/login/login.component';
import { DashboardComponent } from '@app/components/dashboard/dasboard.component';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [authGuard],
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [authGuard],
    component: DashboardComponent,
  },
];
