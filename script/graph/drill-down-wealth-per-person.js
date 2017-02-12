var data = {
  x: ['90% non-wenao', '10% non-wenao', '99% wenao', '1% wenao'],
  y: [1098, 86815, 82014, 11009963],
  name: 'Wealth Per Person Split By Wealth Bracket',
  type: 'bar',
  marker: {
    color: ['blue', 'blue', 'orange', 'orange']
  }
};
Plotly.newPlot('drill-down-wealth-per-person-graph', [data], { title: 'Wealth Per Person Split By Wealth Bracket' }, { displayModeBar: false });
