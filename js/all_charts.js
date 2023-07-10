
var options = {
      chart: {
              type: 'bar'
            },
            series: [{
              name: 'sales',
              data: [112.01,124.52,132.03,139.84]
            }],
            xaxis:{
              categories: ['2017-2018','2018-2019','2019-2020','2020-2021']
            },
            fill: {
                    type: 'gradient',
                    gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.7,
                  opacityTo: 0.9,
                  type: "vertical",
                  colorStops: [
                  {
                    offset: 0,
                    color: "var(--shade3)",
                    opacity: 1
                  },
                  {
                    offset: 100,
                    color: "var(--shade1)",
                    opacity: 1
                  }],},
                  },
          }

          var chart = new ApexCharts(document.querySelector("#sharemarket"), options);
          chart.render();

          var options = {
            chart: {
              type: 'bar'
            },
            series: [{
              name: 'sales',
              data: [1070.18,1121.50,1116.26,1134.70]
            }],
            xaxis:{
              categories: ['2017-2018','2018-2019','2019-2020','2020-2021']
            },
            fill: {
                    type: 'gradient',
                    gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.7,
                  opacityTo: 0.9,
                  type: "vertical",
                  colorStops: [
                  {
                    offset: 0,
                    color: "var(--shade2)",
                    opacity: 1
                  },
                  {
                    offset: 100,
                    color: "var(--altcolor)",
                    opacity: 1
                  }],},
                  },
          
          }

          var chart = new ApexCharts(document.querySelector("#fund"), options);
          chart.render();
