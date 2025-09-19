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
  page: number = 1;
  totalPages: number = 1;

  constructor(private workspaceService: WorkspaceService) { }

  ngOnInit() {
    this.loadWorkspaces();
  }

  loadWorkspaces() {
    this.workspaceService.fetchAllWorkspaces(this.page).subscribe({
      next: (response) => {
        this.workspaces = response.data;
        response.totalPages === 0 ? this.totalPages = 1 : this.totalPages = response.totalPages;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  prevPage() {
    if (this.page < this.totalPages) {
      this.page--;
      this.loadWorkspaces();
    }
  }

  nextPage() {
    if (this.page > 1) {
      this.page++;
      this.loadWorkspaces();
    }
  }
}
