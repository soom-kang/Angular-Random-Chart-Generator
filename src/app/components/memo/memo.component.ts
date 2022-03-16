import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { MemoService, ListService } from '@/service';
import { MessageService } from 'primeng/api';
import { Types } from '@/types';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss'],
  providers: [MessageService],
})
export class MemoComponent implements OnInit {
  title = '';
  content = '';
  isTitleValid = {
    'ng-invalid ng-dirty': !!this.title,
  };
  isContentValid = {
    'ng-invalid ng-dirty': !!this.content,
  };

  constructor(
    private memoService: MemoService,
    private listService: ListService,
    private location: Location,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  handleSubmit(e: MouseEvent | KeyboardEvent): void {
    if (!this.title) this.isTitleValid['ng-invalid ng-dirty'] = true;
    if (!this.content) this.isContentValid['ng-invalid ng-dirty'] = true;
    if (!this.title || !this.content) return;

    const newMemo: Types.Memo = {
      id: this.listService.generateId(),
      title: this.title,
      content: this.content,
      chartType: this.listService.generateChartType(),
      chartData: {
        labels: [],
        datasets: [],
      },
    };

    this.showLog();

    if (newMemo.chartType)
      newMemo.chartData = this.listService.generateChartData(newMemo.chartType);

    this.memoService.addMemo(newMemo);

    this.router.navigate(['/']);
  }

  goBack(): void {
    this.location.back();
  }

  private showLog(): void {
    this.messageService.add({
      key: 'bc',
      severity: 'success',
      summary: 'Enrolled Successfully 🙌🏻',
      detail: 'Will Redirect to Home within 3 sec ... ⏳',
    });
  }
}
