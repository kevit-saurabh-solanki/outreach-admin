import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

const routes: Routes = [
    {
        path: '',
        component: UsersListComponent,
        title: 'Users'
    },
    {
        path: 'add',
        component: UserFormComponent,
        title: 'Add User'
    },
    {
        path: 'edit/:id',
        component: UserFormComponent,
        title: 'Edit User'
    },
    {
        path: ':id',
        component: UserDetailComponent,
        title: 'User Detail'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }