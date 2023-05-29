import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../services/user.service';
import { RegistrationCredentials } from '../../auth/models/credentials.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  user!: RegistrationCredentials;
  private toggle = false;

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCurrentUsers();
  }

  onToggleSidebar() {
    this.toggle = !this.toggle;
    this.sidebarService.toggleSidebar$.next(this.toggle);
  }

  getCurrentUsers() {
    this.userService
      .getAllUsers()
      .pipe(
        map((res) => {
          res.filter((flteredUser: RegistrationCredentials) => {
            if (
              flteredUser.email ===
              JSON.parse(localStorage.getItem('logged_user')!).email
            ) {
              this.user = flteredUser;
            }
          });
        })
      )
      .subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
