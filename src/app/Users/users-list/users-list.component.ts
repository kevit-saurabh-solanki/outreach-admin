import { Component } from '@angular/core';
import { UsersInterface } from '../users.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users!: UsersInterface;
  
}
