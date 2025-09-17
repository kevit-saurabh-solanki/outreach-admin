import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
