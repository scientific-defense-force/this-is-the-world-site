var data = {
  x: ['90% non-wenao', '10% non-wenao', '99% wenao', '1% wenao'],
  y: [6250283300000, 54906716700000, 82572992800000, 111970007200000],
  name: 'Total Wealth Split By Wealth Bracket',
  type: 'bar',
  marker: {
    color: ['blue', 'blue', 'orange', 'orange']
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
  title: 'Total Wealth Split By Wealth Bracket',
  annotations: annotationContent
};

Plotly.newPlot('drill-down-wealth-graph', [data], layout, { displayModeBar: false });
