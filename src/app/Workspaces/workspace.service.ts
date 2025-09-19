import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginateWorkspaceInterface, SendWorkspaceInterface, WorkspaceInterface } from './workspace.interface';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:3000/workspaces";

  fetchAllWorkspaces(page: number, limit: number = 10) {
    return this.http.get<PaginateWorkspaceInterface>(`${this.baseurl}?page=${page}&limit=${limit}`).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  addWorkspace(body: SendWorkspaceInterface) {
    return this.http.post(`${this.baseurl}`, body).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  editWorkspace(workspaceId: string, body: SendWorkspaceInterface) {
    return this.http.put(`${this.baseurl}/${workspaceId}`, body).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  deleteWorkspace(workspaceId: string) {
    return this.http.delete(`${this.baseurl}/${workspaceId}`).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  fetchWorkspaceById(workspaceId: string) {
    return this.http.get(`${this.baseurl}/${workspaceId}`).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }
}
