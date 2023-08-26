import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions!: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Data by Continent'
      },
      subtitle: {
        text: 'GDP'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: [{
        name: 'Africa',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: 'America',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Asia',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'Europe',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
      }]
    };

    HC_exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
// function HC_exporting(Highcharts: typeof Highcharts) {
//   throw new Error('Function not implemented.');
// }

