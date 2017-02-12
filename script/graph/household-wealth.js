var data = {
  x: ['non-wenao', 'wenao'],
  y: [60490000000000, 194543000000000],
  name: 'Household Wealth',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

Plotly.newPlot('household-wealth-graph', [data], { title: 'Household Wealth' }, { displayModeBar: false });
