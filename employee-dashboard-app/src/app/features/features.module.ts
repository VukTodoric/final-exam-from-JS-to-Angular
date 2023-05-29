import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [HomepageComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MaterialModule, SharedModule],
})
export class FeaturesModule {}
