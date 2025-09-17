import { Component } from '@angular/core';
import { WorkspaceInterface } from '../workspace.interface';
import { Location } from '@angular/common';
import { WorkspaceService } from '../workspace.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workspace-detail',
  templateUrl: './workspace-detail.component.html',
  styleUrl: './workspace-detail.component.scss'
})
export class WorkspaceDetailComponent {
  workspace!: WorkspaceInterface;

  constructor(private location: Location, private workspaceService: WorkspaceService, private router: Router, private routeParam: ActivatedRoute) { }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    const id = this.routeParam.snapshot.paramMap.get('id');
    if (!id) return;

    this.workspaceService.fetchWorkspaceById(id).subscribe({
      next: (res) => {
        this.workspace = (res as WorkspaceInterface);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteWorkspace(workspaceId: string) {
    const confirmDelete = window.confirm('Are you sure you want to delete this workspace?');
    if (!confirmDelete) return;

    this.workspaceService.deleteWorkspace(workspaceId).subscribe({
      next: () => {
        console.log('Contact deleted');
        this.router.navigate(['/workspaces']);
      },
      error: (err) => {
        console.error('Error deleting contact:', err);
      }
    });
  }

  redirectToEdit() {
    this.router.navigate(['workspaces/edit', this.workspace._id]);
  }
}
