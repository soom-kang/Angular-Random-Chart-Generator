import { Injectable } from '@angular/core';
import { ListService } from '@/service/list/list.service';

import { Types } from '@/types';

@Injectable({
  providedIn: 'root',
})
export class MemoService {
  constructor(private listService: ListService) {}

  getMemos(): Types.Memo[] {
    return this.listService.memo;
  }

  getMemoDetail(id: string): Types.Memo {
    const searchData = this.listService.memo.find((item) => item.id === id);
    const defaultData = {
      id: '',
      title: 'No Data ',
      content: 'There is nothing to show ... 👀👀',
      chartType: '',
      chartData: {
        labels: [],
        datasets: [],
      },
    };
    return searchData ? searchData : defaultData;
  }

  addMemo(newMemo: Types.Memo): void {
    const newMemos = [newMemo, ...this.listService.memo];
    this.listService.memo = newMemos;
  }
}
