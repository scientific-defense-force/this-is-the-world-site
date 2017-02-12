var data = {
  x: ['90% non-wenao', '10% non-wenao', '99% wenao', '1% wenao'],
  y: [6250283300000, 54906716700000, 82572992800000, 111970007200000],
  name: 'Total Wealth Split By Wealth Bracket',
  type: 'bar',
  marker: {
    color: ['blue', 'blue', 'orange', 'orange']
  }
};

Plotly.newPlot('drill-down-wealth-graph', [data], { title: 'Total Wealth Split By Wealth Bracket' }, { displayModeBar: false });
