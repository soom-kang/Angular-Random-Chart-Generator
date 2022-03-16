import { Injectable } from '@angular/core';
import { Types } from '@/types';
import { DataService } from '@/service/data/data.service';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  memo: Types.Memo[] = [];

  private newMemo: Types.Memo[] = [];
  private ItemTemplate: Types.Memo = {
    id: '',
    title: '',
    content: '',
    chartType: '',
    chartData: {
      labels: [],
      datasets: [],
    },
  };
  private maxMemoCount = Math.ceil(Math.random() * 10) + 5;
  private labels = [
    'Crimson',
    'LightCoral',
    'LightSalmon',
    'HotPink',
    'Tomato',
    'Gold',
    'Moccasin',
    'DarkKhaki',
    'Plum',
    'Lavender',
    'Indigo',
    'MediumSlateBlue',
    'LimeGreen',
    'MediumSeaGreen',
    'OliveDrab',
    'MediumAquamarine',
    'PaleTurquoise',
    'MediumTurquoise',
    'LightSkyBlue',
    'SteelBlue',
    'RoyalBlue',
    'RosyBrown',
    'Gray',
    'Azure',
  ];
  private secondLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  constructor(private dataService: DataService) {
    this.generateMemo();

    const chartTemplate = {};
    this.memo.forEach((item) => (item.id = this.generateId()));
  }

  async generateMemo() {
    // ? generat template of random count
    for (let i = 0; i < this.maxMemoCount; i++) {
      const newItem = _.cloneDeep(this.ItemTemplate);
      this.newMemo.push(newItem);
    }

    //? generate random Memo
    this.newMemo.forEach(async (item) => {
      item.id = this.generateId();
      item.title = (await this.generateTitleContent())!.title;
      item.content = (await this.generateTitleContent())!.body;
      item.chartType = this.generateChartType();
      item.chartData = this.generateChartData(item.chartType);
    });

    this.memo = this.newMemo;
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 7);
  }

  private generateTitleContent() {
    return this.dataService.fetchData().toPromise();
  }

  generateChartType() {
    const chartType = ['bar', 'doughnut', 'pie', 'line', 'radar', 'polarArea'];
    return chartType[Math.floor(Math.random() * chartType.length)];
  }

  generateChartData(chartType: string) {
    let newChartData: Types.ChartData = {
      labels: null,
      datasets: [],
    };

    const rowCount = Math.floor(Math.random() * 5 + 3);

    //  Random label generator
    const newLabel = this.labels
      .sort(() => Math.random() - 0.5)
      .slice(0, rowCount);
    newChartData.labels = newLabel;

    // SECTION pie & doughnut
    //  Random new data for doughnut & pie

    if (
      chartType === 'doughnut' ||
      chartType === 'pie' ||
      chartType === 'polarArea'
    ) {
      const dataSet: Types.Dataset = {
        label: null,
        data: [],
        backgroundColor: '',
        fill: false,
        borderColor: '',
      };

      const newData = [];
      for (let i = 0; i < newLabel.length; i++) {
        newData.push(Math.ceil(Math.random() * 50 + 30));
      }

      dataSet.data = newData;
      dataSet.backgroundColor = newLabel;
      dataSet.borderColor = newLabel;

      newChartData.datasets.push(dataSet);

      // console.log(newChartData);
      return newChartData;
    } else {
      for (let i = 0; i < rowCount; i++) {
        const dataSet: Types.Dataset = {
          label: null,
          data: [],
          backgroundColor: '',
          fill: false,
          borderColor: '',
        };

        const newData = [];
        for (let j = 0; j < Math.ceil(Math.random() * 5 + 2); j++) {
          newData.push(Math.ceil(Math.random() * 50 + 30));
        }

        const newColor = this.labels[i];

        const secondLabel = this.secondLabels[i];

        dataSet.data = newData;
        dataSet.backgroundColor = dataSet.borderColor = newColor;
        dataSet.label = secondLabel;

        newChartData.datasets.push(dataSet);
      }

      return newChartData;
    }
  }
}
