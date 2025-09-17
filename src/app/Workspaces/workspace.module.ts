import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceListComponent } from './workspace-list/workspace-list.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SharedModule } from '../Shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceDetailComponent } from './workspace-detail/workspace-detail.component';
import { WorkspaceFormComponent } from './workspace-form/workspace-form.component';


@NgModule({
  declarations: [
    WorkspaceListComponent,
    WorkspaceComponent,
    WorkspaceDetailComponent,
    WorkspaceFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    WorkspaceRoutingModule
]
})
export class WorkspaceModule { }
