import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarRoutingModule } from './bar-routing.module';
import { MainComponent } from './main/main.component';
import { BarDialogComponent } from './dialog/dialog.component';
import { CoalescingComponentFactoryResolver } from '../coalescing-component-factory-resolver.service';

@NgModule({
  declarations: [MainComponent, BarDialogComponent],
  entryComponents: [BarDialogComponent],
  imports: [CommonModule, BarRoutingModule]
})
export class BarModule {
  constructor(
    coalescingResolver: CoalescingComponentFactoryResolver,
    localResolver: ComponentFactoryResolver
  ) {
    coalescingResolver.registerResolver(localResolver);
  }
}
