import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { FooDialogComponent } from '../dialog/dialog.component';
import { AppDialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  constructor(private modal: BsModalService) {}

  ngOnInit() {}

  showFoo() {
    this.modal.show(FooDialogComponent);
  }

  showApp() {
    this.modal.show(AppDialogComponent);
  }
}
