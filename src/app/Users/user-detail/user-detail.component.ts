import { Component, inject } from '@angular/core';
import { UsersInterface } from '../users.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user!: UsersInterface;
  private userService = inject(UsersService);

  constructor(private router: Router, private location: Location, private routeParam: ActivatedRoute) {}

  redirectToEdit() {
    this.router.navigate(['edit', this.user._id]);
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    const id = this.routeParam.snapshot.paramMap.get('id');
    if (!id) return;

    this.userService.fetchUserByUserId(id).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
