import { Component, Input } from '@angular/core';
import { UsersInterface } from '../users.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user!: UsersInterface;
}
