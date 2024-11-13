import { Component, signal, Signal } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions, AgChartTheme } from 'ag-charts-community';

@Component({
  selector: 'lib-overall-hours',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './overall-hours.component.html',
  styleUrl: './overall-hours.component.scss'
})
export class OverallHoursComponent {
  donutChartData = signal<any[]>([
    { asset: "Stocks", amount: 60000 },
    { asset: "Bonds", amount: 40000 },
  ]);
  donutChartOptions: AgChartOptions;

  barChartData = signal<any[]>([
    {
      month: "Jan",
      cumulative: 140,
      total: 160,
    },
    {
      month: "Feb",
      cumulative: 140,
      total: 16,
    },
    {
      month: "Mar",
      cumulative: 140,
      total: 16,
    },
    {
      month: "May",
      cumulative: 140,
      total: 16,
    },
    {
      month: "Jun",
      cumulative: 140,
      total: 16,
    },
    {
      month: "Jul",
      cumulative: 140,
      total: 16,
    },
    {
      month: "Aug",
      cumulative: 140,
      total: 16,
    },
    {
      month: "Sep",
      cumulative: 140,
      total: 16,
    },
  ]);
  barChartOptions:AgChartOptions;

  constructor() {

    this.donutChartOptions = {
      data: this.donutChartData(),
      theme: {
        palette: {
          fills: [ "#091836" ,"#03BCF3"],
          strokes: ["#"]
        }
      } ,
      background: {
        fill: "#FBFBFB",
      },
      title: {
        text: "Portfolio Composition",
      },
      series: [
        {
          type: "donut",
          calloutLabelKey: "asset",
          angleKey: "amount",
          innerRadiusRatio: 0.6,
          innerLabels: [
            {
              text: 'Total Hours',
            },
            {
              text: '1,000',
              fontWeight: 'bold',
            }
          ]
        },

      ],
    };

    this.barChartOptions = {
      title: {
        text: "cumulative hours",
      },
      theme: {
        palette: {
          fills: [ "#091836" ,"#03BCF3"],
          strokes: ["#"]
        }
      } ,
      background: {
        fill: "#FBFBFB",
      },
      subtitle: {
        text: "In Billion U.S. Dollars",
      },
      data: this.barChartData(),
      series: [
        {
          type: "bar",
          xKey: "month",
          yKey: "cumulative",
          yName: "Cumulative",
        },
        {
          type: "bar",
          xKey: "month",
          yKey: "total",
          yName: "Total",
        },
      ],
   
    }
  
  }
}
