import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegistrationComponent } from './core/auth/components/registration/registration.component';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';
import { HomepageComponent } from './features/components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  // { redirectTo: '/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
