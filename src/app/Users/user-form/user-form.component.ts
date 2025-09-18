import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersInterface } from '../users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm!: FormGroup;
  user?: UsersInterface;
  successMessage?: boolean;
  worksapceId: string | null = localStorage.getItem('workspaceId');

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    })
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get role() {
    return this.userForm.get('role');
  }

  goBack() {
    this.router.navigate(['worksapces', this.worksapceId, 'users']);
  }

  editUser() {

  }

  addUser() {
    
  }
}
