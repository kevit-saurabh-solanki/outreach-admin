import { Component, Input } from '@angular/core';
import { UsersInterface } from '../users.interface';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: UsersInterface;
  workspaceId?: string | null;

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  deleteUser(userId: string) {
    const confirmDelete = window.confirm('Are you sure you want to delete this User?');
    if (!confirmDelete) return;

    this.userService.deleteUser(userId).subscribe({
      next: (res) => {
        console.log('user deleted');
      },
      error: (err) => {
        console.error('Error deleting User:', err);
      }
    });
  }

  ngOnInit() {
    this.workspaceId = localStorage.getItem('workspaceId');
  }
}
