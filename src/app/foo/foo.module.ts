import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { MainComponent } from './main/main.component';
import { FooDialogComponent } from './dialog/dialog.component';
import { CoalescingComponentFactoryResolver } from '../coalescing-component-factory-resolver.service';

@NgModule({
  declarations: [MainComponent, FooDialogComponent],
  entryComponents: [FooDialogComponent],
  imports: [CommonModule, FooRoutingModule]
})
export class FooModule {
  constructor(
    coalescingResolver: CoalescingComponentFactoryResolver,
    localResolver: ComponentFactoryResolver
  ) {
    coalescingResolver.registerResolver(localResolver);
  }
}
