import { Component } from '@angular/core';
import { UsersInterface } from '../users.interface';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users!: UsersInterface[];
  page: number = 1;
  totalPages: number = 1;

  constructor(private userService: UsersService, private routeParam: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  goBack() {
    this.router.navigate(['/workspaces']);
  }

  loadUsers() {
    const workspaceId = this.routeParam.snapshot.paramMap.get('workspaceId');
    if (!workspaceId) return;
    localStorage.setItem('workspaceId', workspaceId);

    this.userService.fetchUsersByWorkspaceId(workspaceId, this.page).subscribe({
      next: (response) => {
        this.users = response.data;
        response.totalPages === 0 ? this.totalPages = 1 : this.totalPages = response.totalPages;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadUsers();
    }
  }

  prevPage() {
    if (this.totalPages > 1) {
      this.page--;
      this.loadUsers();
    }
  }
}
