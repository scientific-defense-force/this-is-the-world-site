var trace1 = {
  x: ['non-wenao', 'wenao'],
  y: [6324568000, 1016988000],
  name: 'Population',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

var trace2 = {
  x: ['non-wenao', 'wenao'],
  y: [60490000000000, 194543000000000],
  name: 'Household Wealth',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

var trace3 = {
  x: ['non-wenao', 'wenao'],
  y: [9654, 191293],
  name: 'Average Wealth Per Person',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

var trace4 = {
  x: ['non-wenao', 'wenao'],
  y: [16626636799999, 111970007200000],
  name: '1% wealth',
  type: 'bar',
  marker: {
    color: ['green', 'green']
  }
};

var trace5 = {
  x: ['non-wenao', 'wenao'],
  y: [44530363200001, 82572992800000],
  name: '99% wealth',
  type: 'bar',
  marker: {
    color: ['red', 'red']
  }
};

var trace6 = {
  x: ['non-wenao', 'wenao'],
  y: [262890, 11009963],
  name: '1% wealth per person',
  type: 'bar',
  marker: {
    color: ['green', 'green']
  }
};

var trace7 = {
  x: ['non-wenao', 'wenao'],
  y: [7112, 82014],
  name: '99% wealth per person',
  type: 'bar',
  marker: {
    color: ['red', 'red']
  }
};

Plotly.newPlot('population-graph', [trace1], { title: 'Population' }, { displayModeBar: false });
Plotly.newPlot('household-wealth-graph', [trace2], { title: 'Household Wealth' }, { displayModeBar: false });
Plotly.newPlot('average-wealth-graph', [trace3], { title: 'Average Wealth Per Person' }, { displayModeBar: false });
Plotly.newPlot('drill-down-graph', [trace4, trace5], { title: '1% Wealth Split' }, { displayModeBar: false });
Plotly.newPlot('drill-down-per-person-graph', [trace6, trace7], { title: '1% Wealth Split Per Person' }, { displayModeBar: false });
