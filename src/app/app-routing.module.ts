import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule),
    title: 'Admin Login'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'workspaces',
    loadChildren: () => import('./Workspaces/workspace.module').then(m => m.WorkspaceModule),
    title: 'Workspaces',
    // canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
