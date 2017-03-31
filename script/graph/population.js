// // var data = {
// //   x: ['non-wenao', 'wenao'],
// //   y: [6324568000, 1016988000],
// //   name: 'Population',
// //   type: 'bar',
// //   marker: {
// //     color: ['blue', 'orange']
// //   }
// // };
// //
// // Plotly.newPlot('population-graph', [data], { title: 'Population' }, { displayModeBar: false });
//
// // google.charts.load('current', {'packages':['bar']});
//   // google.charts.setOnLoadCallback(drawChart);
//
//   function drawChart() {
//     var data = google.visualization.arrayToDataTable([
//       ['Year', 'Sales', 'Expenses', 'Profit'],
//       ['2014', 1000, 400, 200],
//       ['2015', 1170, 460, 250],
//       ['2016', 660, 1120, 300],
//       ['2017', 1030, 540, 350]
//     ]);
//
//     var options = {
//       chart: {
//         title: 'Company Performance',
//         subtitle: 'Sales, Expenses, and Profit: 2014-2017',
//       },
//       bars: 'vertical',
//       vAxis: {format: 'decimal'},
//       height: 400,
//       colors: ['#1b9e77', '#d95f02', '#7570b3']
//     };
//
//     var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
//
//     chart.draw(data, google.charts.Bar.convertOptions(options));
//
// function drawChart() {
//   const data = new google.visualization.arrayToDataTable([
//       ['Population', 'Group', { role: "style" }],
//       ['non-wenao', 6324568000, 'blue'],
//       ['wenao', 1016988000, 'orange']
//   ])
//
//   const options = {
//     chart: {
//       title: 'Population'
//     }
//
//   }
//
//   const chart = new google.charts.Bar(document.getElementById('population-graph'))
//
//   chart.draw(data, options)
// }
