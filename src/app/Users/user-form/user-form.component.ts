import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendUsersInterface, UsersInterface } from '../users.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm!: FormGroup;
  user!: UsersInterface;
  successMessage?: boolean;
  worksapceId: string | null = localStorage.getItem('workspaceId');
  roleOption!: string[];
  private userService = inject(UsersService);

  constructor(private formBuilder: FormBuilder, private router: Router, private routeParam: ActivatedRoute) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]],
    })

    const id = this.routeParam.snapshot.paramMap.get('id');
    if (id) {
      this.userService.fetchUserByUserId(id).subscribe({
        next: (res) => {
          this.user = res;

          this.userForm.patchValue({
            email: this.user.email,
            password: this.user.password,
            role: this.user.role
          })
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

    this.roleOption = ['editor', 'viewer'];
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
    this.router.navigate(['workspaces', this.worksapceId, 'users']);
  }

  editUser() {
    if (this.userForm.invalid) return;

    const formValues = this.userForm.value;
    const workspaceId = localStorage.getItem('workspaceId');

    const userToEdit: SendUsersInterface = {
      email: formValues.email,
      password: formValues.password,
      role: formValues.role,
      workspaceId: workspaceId || ''
    };

    this.userService.editUser(this.user._id, userToEdit).subscribe({
      next: (res) => {
        this.userForm.reset();
        this.successMessage = true;
        console.log('user edited');
      },
      error: (err) => {
        this.successMessage = false;
        console.error('error editing user', err);
      }
    })
  }

  addUser() {
    if (this.userForm.invalid) return;

    const formValues = this.userForm.value;
    const workspaceId = localStorage.getItem('workspaceId');

    const userToAdd: SendUsersInterface = {
      email: formValues.email,
      password: formValues.password,
      role: formValues.role,
      workspaceId: workspaceId || ''
    };

    this.userService.addUser(userToAdd).subscribe({
      next: (res) => {
        this.userForm.reset();
        this.successMessage = true;
        console.log("user added");
      },
      error: (err) => {
        console.error('error adding user', err);
      }
    })
  }
}
