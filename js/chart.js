var options = {
   series: [{
      name: 'No.of Police quarters',
      data: [1951,1705,851,2371]
 }],
   annotations: {
   points: [{
     x: 'Bananas',
     seriesIndex: 0,
     label: {
       borderColor: '#775DD0',
       offsetY: 0,
       style: {
         color: '#fff',
         background: '#775DD0',
       },
       text: 'Bananas are good',
     }
   }]
 },
 chart: {
   height: 350,
   type: 'bar',
 },
 plotOptions: {
   bar: {
     borderRadius: 4,
     columnWidth: '50%',
   }
 },
 dataLabels: {
   enabled: false
 },
 xaxis: {
   // labels: {
   //   rotate: -45
   // },
   categories: ['2017-18','2018-19','2019-20','2020-21'],
   // tickPlacement: 'on'
 },
 yaxis: {
   title: {
     text: 'No. of Police houses constructed',
   },
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
   color: "var(--shade1)",
   opacity: 1
 },
 {
   offset: 100,
   color: "var(--shade3)",
   opacity: 1
 }]
 ,},
 },
//  fill: {
//    type: 'gradient',
//    gradient: {
//      shade: 'light',
//      type: "horizontal",
//      shadeIntensity: 0.25,
//      gradientToColors: undefined,
//      inverseColors: true,
//      opacityFrom: 0.85,
//      opacityTo: 0.85,
//      stops: [10,0,30, 0, 100,]
//    },
//  }
 };

 var chart = new ApexCharts(document.querySelector("#chart1"), options);
 chart.render();













 var options = {
   series: [{
      name: 'No.of Police quarters',
      data: [1951,1705,851,2371]
 }],
   annotations: {
   points: [{
     x: 'Bananas',
     seriesIndex: 0,
     label: {
       borderColor: '#775DD0',
       offsetY: 0,
       style: {
         color: '#fff',
         background: '#775DD0',
       },
       text: 'Bananas are good',
     }
   }]
 },
 chart: {
   height: 350,
   type: 'bar',
 },
 plotOptions: {
   bar: {
     borderRadius: 4,
     columnWidth: '50%',
   }
 },
 dataLabels: {
   enabled: false
 },
 xaxis: {
   // labels: {
   //   rotate: -45
   // },
   categories: ['2017-18','2018-19','2019-20','2020-21'],
   // tickPlacement: 'on'
 },
 yaxis: {
   title: {
     text: 'No. of Police houses constructed',
   },
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
   color: "var(--shade1)",
   opacity: 1
 },
 {
   offset: 100,
   color: "var(--shade3)",
   opacity: 1
 }]
 ,},
 },
//  fill: {
//    type: 'gradient',
//    gradient: {
//      shade: 'light',
//      type: "horizontal",
//      shadeIntensity: 0.25,
//      gradientToColors: undefined,
//      inverseColors: true,
//      opacityFrom: 0.85,
//      opacityTo: 0.85,
//      stops: [10,0,30, 0, 100,]
//    },
//  }
 };

 var chart = new ApexCharts(document.querySelector("#chart2"), options);
 chart.render();

