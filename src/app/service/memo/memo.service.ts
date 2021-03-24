import { Injectable } from '@angular/core';
import { ListService } from '@/service/list/list.service';

import { Types } from '@/typings';

@Injectable({
  providedIn: 'root',
})
export class MemoService {
  constructor(private listService: ListService) {}

  getMemos(): Types.Memo[] {
    return this.listService.memo;
  }

  getMemoDetail(id: string | null): Types.Memo {
    const searchData = this.listService.memo.find((item) => item.id === id);
    const defaultData = {
      id: null,
      title: 'No Data ',
      content: 'There is nothing to show ... 👀👀',
      chartType: null,
      chartData: null,
    };
    return searchData ? searchData : defaultData;
  }

  addMemo(newMemo: Types.Memo): void {
    const newMemos = [newMemo, ...this.listService.memo];
    this.listService.memo = newMemos;
  }
}
