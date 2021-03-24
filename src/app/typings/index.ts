export namespace Types {
  export interface Memo {
    id: string | null;
    title: string | null;
    content: string | null;
    chartType: string | null;
    chartData: ChartData | null;
  }

  export interface ChartData {
    labels: string[] | null;
    datasets: Dataset[];
  }

  export interface Dataset {
    label: string | string[] | null;
    data: number[];
    backgroundColor: string | string[] | null;
    borderColor: string | string[] | null;
    fill: boolean | null;
  }

  export interface Mock {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
}
