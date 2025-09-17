import { Component, inject } from '@angular/core';
import { SendWorkspaceInterface, WorkspaceInterface } from '../workspace.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WorkspaceService } from '../workspace.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-workspace-form',
  templateUrl: './workspace-form.component.html',
  styleUrl: './workspace-form.component.scss'
})
export class WorkspaceFormComponent {
  workspace!: WorkspaceInterface;
  successMessage?: boolean;
  workspaceForm!: FormGroup;
  private workspaceService = inject(WorkspaceService)

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.workspaceForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.workspaceService.fetchWorkspaceById(id).subscribe({
        next: (res) => {
          this.workspace = (res as WorkspaceInterface);

          if (this.workspace) {
            this.workspaceForm.patchValue({
              name: this.workspace.name,
              description: this.workspace.description
            })
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  get name() {
    return this.workspaceForm.get('name');
  }

  get description() {
    return this.workspaceForm.get('description');
  }

  addWorkspace() {
    if (this.workspaceForm.invalid) return;

    const formValues = this.workspaceForm.value;

    const workspaceToAdd: SendWorkspaceInterface = {
      name: formValues.name,
      description: formValues.description
    }

    this.workspaceService.addWorkspace(workspaceToAdd).subscribe({
      next: (res) => {
        this.workspaceForm.reset();
        console.log("workspace add");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  editWorkspace() {
    if (this.workspaceForm.invalid) return;

    const formValues = this.workspaceForm.value;

    const workspaceToEdit: SendWorkspaceInterface = {
      name: formValues.name,
      description: formValues.description
    }

    this.workspaceService.editWorkspace(this.workspace._id, workspaceToEdit).subscribe({
      next: (res) => {
        this.workspaceForm.reset();
        console.log('workspace edited');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  goBack() {
    this.location.back();
  }
}
