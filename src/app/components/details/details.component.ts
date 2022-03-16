import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { MessageService } from 'primeng/api';

import { MemoService } from '@/service';
import { Types } from '@/types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [MessageService],
})
export class DetailsComponent implements OnInit {
  memoDetail: Types.Memo = {
    id: '',
    title: '',
    content: '',
    chartType: '',
    chartData: {
      labels: [],
      datasets: [],
    },
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private memoService: MemoService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((resp) => {
      const id = resp.get('id');
      if (!id) return;

      const data = this.memoService.getMemoDetail(id);
      this.memoDetail = data;

      if (!data.id) {
        this.showLog();
        this.router.navigate(['/']);
      }
    });
  }

  getMemoDetails(id: string): void {
    const data = this.memoService.getMemoDetail(id);
    this.memoDetail = data;
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
