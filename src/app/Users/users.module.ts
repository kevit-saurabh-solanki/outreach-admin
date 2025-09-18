import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'

@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    DropdownModule
  ]
})
export class UsersModule { }
