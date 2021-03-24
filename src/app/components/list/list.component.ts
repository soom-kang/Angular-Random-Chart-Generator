import { Component, OnInit } from '@angular/core';
import { Types } from '@/typings';
import { MemoService } from '@/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  memos: Types.Memo[] = [];

  constructor(private memoService: MemoService, private router: Router) {}

  ngOnInit(): void {
    this.getMemos();
  }

  getMemos(): void {
    this.memos = this.memoService.getMemos();
  }

  clickListItem(e: MouseEvent): void {
    const id = (e.target as HTMLTableRowElement).id;
    this.router.navigate([`/memo/${id}`]);
  }

  onRowSelect<T extends { data: Types.Memo }>(e: T) {
    const { id } = e.data;
    this.router.navigate([`/memo/${id}`]);
  }
}
