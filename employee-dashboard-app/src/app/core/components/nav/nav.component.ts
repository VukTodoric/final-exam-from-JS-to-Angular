import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  private toggle = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  onToggleSidebar() {
    this.toggle = !this.toggle;
    this.sidebarService.toggleSidebar$.next(this.toggle);
  }

  onLogout() {}
}
