var data = {
  x: ['non-wenao', 'wenao'],
  y: [6324568000, 1016988000],
  name: 'Population',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

Plotly.newPlot('population-graph', [data], { title: 'Population' }, { displayModeBar: false });
