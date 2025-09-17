import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkspaceInterface } from './workspace.interface';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:3000/workspaces";

  fetchAllWorkspaces() {
    return this.http.get<WorkspaceInterface[]>(`${this.baseurl}`).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  addWorkspace({ _id, createdAt, ...body }: WorkspaceInterface) {
    return this.http.post(`${this.baseurl}`, body).pipe(
      catchError(err => {
        return throwError(() => err);
      })
    )
  }

  editWorkspace(workspaceId: string, { _id, createdAt, ...body }: WorkspaceInterface) {
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
