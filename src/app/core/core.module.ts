import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { throwIfAlreadyLoaded } from './guards/core-import-guard';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CoreModule { 
  construct ( @Optional() @SkipSelf() parentModule: CoreModule ){
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
