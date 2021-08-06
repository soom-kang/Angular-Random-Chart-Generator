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

    const consoleStyle = `
      font-family: -apple-system, sans-serif;
      font-size: 2.5em;
      font-weight: 300;
      border-radius: 5px;
      padding: 15px;
      background: #1D222B;
      color: #fff;
      text-shadow:
          0 0 7px #bc13fe,
          0 0 10px #B4F8C8,
          0 0 21px #A0E7E5
    `;

    console.info('%c  🍩  Github.com/VannsKang  ', consoleStyle);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  clickTitle = _.debounce(() => {
    this.messageService.add({
      severity: 'info',
      summary: 'Hello 👋👋',
      detail: 'Good Job! Please visit my Github 🍩',
    });
  }, 1000);
}
