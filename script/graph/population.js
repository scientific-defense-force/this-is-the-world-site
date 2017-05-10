var data = {
  x: ['non-wenao', 'wenao'],
  y: [6324568000, 1016988000],
  name: 'Population',
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
    text: numbro(data.y[i]).format('0.0 a'),
    xanchor: 'center',
    yanchor: 'bottom',
    showarrow: false
  };
  annotationContent.push(result);
}

var layout = {
  title: 'Population',
  annotations: annotationContent
};

Plotly.newPlot('population-graph', [data], layout, { staticPlot: true });
