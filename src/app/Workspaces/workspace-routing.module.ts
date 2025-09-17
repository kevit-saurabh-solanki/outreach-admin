import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkspaceListComponent } from "./workspace-list/workspace-list.component";
import { WorkspaceDetailComponent } from "./workspace-detail/workspace-detail.component";
import { WorkspaceFormComponent } from "./workspace-form/workspace-form.component";

const routes: Routes = [
    {
        path: '',
        component: WorkspaceListComponent,
        title: 'Workspaces'
    },
    {
        path: 'add',
        component: WorkspaceFormComponent,
        title: 'Add Workspace'
    },
    {
        path: 'edit/:id',
        component: WorkspaceFormComponent,
        title: 'Edit Workspace'
    },
    {
        path: ':id',
        component: WorkspaceDetailComponent,
        title: 'Workspace Detail'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkspaceRoutingModule { }