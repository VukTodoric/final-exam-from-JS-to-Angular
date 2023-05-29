import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeDetails } from '../../models/employee-details.interface';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { LoadingSpinnerService } from 'src/app/core/services/loading-spinner.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter<void>();

  heading: string = 'Homepage';
  employeeArray: EmployeeDetails[] = [];
  columns: string[] = [
    'employee',
    'email',
    'position',
    'description',
    'employment_date',
  ];

  private unsubscribe$ = new Subject<void>();

  constructor(
    private employeeService: EmployeeService,
    private loadingSpinnerService: LoadingSpinnerService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.loadingSpinnerService.startLoading();
    this.employeeService
      .getAllEmployee()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        setTimeout(() => {
          this.employeeArray = data;
          this.loadingSpinnerService.stopLoading();
        }, 3000);
      });
  }

  onSearch(event: any) {
    this.employeeService
      .serachEmployeeByEmail(event)
      .pipe(debounceTime(500), takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        // this.search.emit();
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
