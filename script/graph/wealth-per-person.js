var data = {
  x: ['non-wenao', 'wenao'],
  y: [9654, 191293],
  name: 'Average Wealth Per Person',
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
    text: numbro(data.y[i]).formatCurrency('0 a'),
    xanchor: 'center',
    yanchor: 'bottom',
    showarrow: false
  };
  annotationContent.push(result);
}

var layout = {
  title: 'Average Wealth Per Person',
  annotations: annotationContent
};


Plotly.newPlot('average-wealth-graph', [data], layout, { displayModeBar: false });
