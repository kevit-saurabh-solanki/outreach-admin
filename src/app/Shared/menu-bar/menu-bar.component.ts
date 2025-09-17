import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  activeTab?: string; // default active
  user: any;
  selectedWorkspaceId: string = '';

  constructor(private router: Router, private sharedService: SharedService) { }

  setActive(tab: string) {
    this.activeTab = tab;
  }

  logout() {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (!confirmLogout) return;

    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.user = JSON.parse(userStr);
    }
  }

}
