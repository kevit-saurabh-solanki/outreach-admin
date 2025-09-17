import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginInterface } from './login.interface';
import { catchError, throwError, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  authState$ = this.authState.asObservable(); //not working

  constructor(private http: HttpClient, private router: Router) { }

  baseUrl: string = 'http://localhost:3000/login';


  login(body: loginInterface) {
    return this.http.post<{token: string}>(`${this.baseUrl}/admins`, body).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }


  logout() {
    localStorage.clear();
    this.authState.next(false);
    this.router.navigate(['/login']);
  }

}

