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
    path: 'workspaces',
    loadChildren: () => import('./Workspaces/workspace.module').then(m => m.WorkspaceModule),
    title: 'Workspaces',
    canActivate: [authGuard]
  },
  {
    path: 'workspaces/:workspaceId/users',
    loadChildren: () => import('./Users/users.module').then(m => m.UsersModule),
    title: 'Users',
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
