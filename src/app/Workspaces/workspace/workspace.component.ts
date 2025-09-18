import { Component, Input } from '@angular/core';
import { WorkspaceInterface } from '../workspace.interface';
import { WorkspaceService } from '../workspace.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tr[app-workspace]',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
  @Input() workspace!: WorkspaceInterface;

  constructor(private workspaceService: WorkspaceService, private router: Router) {}

  deleteWorkspace(workspaceId: string) {
    const confirmDelete = window.confirm('Are you sure you want to delete this workspace?');
    if (!confirmDelete) return;

    this.workspaceService.deleteWorkspace(workspaceId).subscribe({
      next: () => {
        this.router.navigate(['/workspaces']);
      },
      error: (err) => {
        console.error('Error deleting contact:', err);
      }
    });
  }

}
