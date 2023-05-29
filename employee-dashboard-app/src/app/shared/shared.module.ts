import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
//Pipes
import { NameInitialsPipe } from './pipes/name-initials.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { MaterialModule } from './material/material.module';

const COMPONENTS = [ButtonComponent, SearchComponent];
const PIPES = [NameInitialsPipe, ShortenPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, MaterialModule],
  exports: [...COMPONENTS, ...PIPES],
})
export class SharedModule {}
