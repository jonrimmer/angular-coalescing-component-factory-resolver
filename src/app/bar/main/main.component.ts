import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { AppDialogComponent } from '../../dialog/dialog.component';
import { BarDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  constructor(private modal: BsModalService) {}

  ngOnInit() {}

  showApp() {
    this.modal.show(AppDialogComponent);
  }

  showBar() {
    this.modal.show(BarDialogComponent);
  }
}
