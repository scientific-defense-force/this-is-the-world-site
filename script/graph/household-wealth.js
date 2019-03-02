var data = {
  x: ['non-wenao', 'wenao'],
  y: [97312000000000, 219744000000000],
  name: 'Household Wealth',
  type: 'bar',
  marker: {
    color: ['blue', 'orange']
  }
};

var annotationContent = [];

for( var i = 0 ; i < data.x.length ; i++ ){
  var result = {
    x: data.x[i],
    y: data.y[i],
    text: numbro(data.y[i]).formatCurrency('0,0 a'),
    xanchor: 'center',
    yanchor: 'bottom',
    showarrow: false
  };
  annotationContent.push(result);
}

var layout = {
  title: 'Household Wealth',
  annotations: annotationContent
};

Plotly.newPlot('household-wealth-graph', [data], layout, { staticPlot: true });
