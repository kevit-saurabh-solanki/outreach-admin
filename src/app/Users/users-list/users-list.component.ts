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
  
  constructor(private userService: UsersService, private routeParam: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const workspaceId = this.routeParam.snapshot.paramMap.get('workspaceId');
    if (!workspaceId) return;
    localStorage.setItem('workspaceId', workspaceId);

    this.userService.fetchUsersByWorkspaceId(workspaceId).subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  goBack() {
    this.router.navigate(['/workspaces']);
  }
}
