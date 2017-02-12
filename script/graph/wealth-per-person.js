var data = {
  x: ['non-wenao', 'wenao'],
  y: [9654, 191293],
  name: 'Average Wealth Per Person',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};


Plotly.newPlot('average-wealth-graph', [data], { title: 'Average Wealth Per Person' }, { displayModeBar: false });
