import { Component } from '@angular/core';
import { WorkspaceInterface } from '../workspace.interface';
import { WorkspaceService } from '../workspace.service';

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss']
})
export class WorkspaceListComponent {
  workspaces: WorkspaceInterface[] = [];

  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit() {
    this.workspaceService.fetchAllWorkspaces().subscribe({
      next: (response) => {
        this.workspaces = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
