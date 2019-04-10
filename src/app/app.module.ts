import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppDialogComponent } from './dialog/dialog.component';
import { CoalescingComponentFactoryResolver } from './coalescing-component-factory-resolver.service';

@NgModule({
  declarations: [AppComponent, MainComponent, AppDialogComponent],
  imports: [BrowserModule, AppRoutingModule, ModalModule.forRoot()],
  entryComponents: [AppDialogComponent],
  providers: [CoalescingComponentFactoryResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(coalescingResolver: CoalescingComponentFactoryResolver) {
    coalescingResolver.init();
  }
}
