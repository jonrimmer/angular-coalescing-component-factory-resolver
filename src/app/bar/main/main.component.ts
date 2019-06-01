import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { AppDialogComponent } from '../../dialog/dialog.component';
import { BarDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  @ViewChild('outlet', { read: ViewContainerRef }) outlet: ViewContainerRef;

  constructor(
    private modal: BsModalService,
    private cfr: ComponentFactoryResolver
  ) {
    // Check we can resolve root components:
  }

  ngOnInit() {
    const factory = this.cfr.resolveComponentFactory(AppDialogComponent);
    this.outlet.createComponent(factory);
  }

  showApp() {
    this.modal.show(AppDialogComponent);
  }

  showBar() {
    this.modal.show(BarDialogComponent);
  }
}
