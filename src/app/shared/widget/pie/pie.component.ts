import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit{
  
  chartOptions!: {};
  Highcharts = Highcharts;

  ngOnInit() {
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Browser market shares in August, 2023',
          align: 'left'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Chrome',
              y: 70.67,
              sliced: true,
              selected: true
          }, {
              name: 'Edge',
              y: 14.77
          },  {
              name: 'Firefox',
              y: 4.86
          }, {
              name: 'Safari',
              y: 2.63
          }, {
              name: 'Internet Explorer',
              y: 1.53
          },  {
              name: 'Opera',
              y: 1.40
          }, {
              name: 'Sogou Explorer',
              y: 0.84
          }, {
              name: 'QQ',
              y: 0.51
          }, {
              name: 'Other',
              y: 2.6
          }]
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
