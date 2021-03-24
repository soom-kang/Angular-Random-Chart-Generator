import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  title = 'Random Chart Generator';

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  clickTitle = _.debounce(() => {
    this.messageService.add({
      severity: 'info',
      summary: 'Hello 🖐🏻🖐🏻',
      detail: 'Designed & Developed by SOOM 😊',
    });
  }, 1000);
}
