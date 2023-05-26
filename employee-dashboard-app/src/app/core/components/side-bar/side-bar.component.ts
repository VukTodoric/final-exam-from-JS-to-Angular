import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, OnDestroy {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;

  private unsubscribe = new Subject<void>();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.toggleMenu();
  }

  private toggleMenu() {
    this.sidebarService.toggleSidebar$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((value) => {
        this.drawer.toggle(value);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
