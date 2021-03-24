import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Types } from '@/typings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  fetchedData: { title: string; content: string } = {
    title: '',
    content: '',
  };

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    const id = Math.ceil(Math.random() * 100);
    return this.http.get<Types.Mock>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
