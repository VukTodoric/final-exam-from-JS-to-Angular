import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SideBarComponent,
    MainLayoutComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CoreModule {}
