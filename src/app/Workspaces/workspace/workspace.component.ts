import { Component, Input } from '@angular/core';
import { WorkspaceInterface } from '../workspace.interface';

@Component({
  selector: 'tr[app-workspace]',
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
  @Input() workspace!: WorkspaceInterface;
}
