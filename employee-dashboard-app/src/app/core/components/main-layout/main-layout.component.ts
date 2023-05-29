import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from '../../services/loading-spinner.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  currentYear: number | Date = new Date().getFullYear();
  isLoading: boolean = false;

  constructor(private loadingSpinnerService: LoadingSpinnerService) {}

  ngOnInit(): void {
    this.loadingSpinnerService.isLoadingState().subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
