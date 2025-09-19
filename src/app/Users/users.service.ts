import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginateUserInterface, SendUsersInterface, UsersInterface } from './users.interface';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "http://localhost:3000/users"

  fetchUsersByWorkspaceId(workspaceId: string, page: number, limit: number = 10) {
    return this.http.get<PaginateUserInterface>(`${this.baseUrl}/workspace/${workspaceId}?page=${page}&limit=${limit}`).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  fetchUserByUserId(userId: string) {
    return this.http.get<UsersInterface>(`${this.baseUrl}/${userId}`).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  addUser(body: SendUsersInterface) {
    return this.http.post(`${this.baseUrl}`, body).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  editUser(userId: string, body: SendUsersInterface) {
    return this.http.put(`${this.baseUrl}/${userId}`, body).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    )
  }

  deleteUser(userId: string) {
    const workspaceId = localStorage.getItem('workspaceId') || '';

    return this.http.delete(`${this.baseUrl}/${userId}`, { params: { workspaceId: workspaceId } }).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    )
  }
}
