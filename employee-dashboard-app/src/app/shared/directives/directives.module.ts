import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorDirective } from './show-error.directive';

const DIRECTIVES = [ShowErrorDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [CommonModule],
  exports: [...DIRECTIVES],
})
export class DirectivesModule {}
