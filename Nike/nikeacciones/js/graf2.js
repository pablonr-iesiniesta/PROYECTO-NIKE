google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['País', 'Popularidad'],
      ['Germany', 300],
      ['United States', 600],
      ['Brazil', 200],
      ['Canada', 500],
      ['France', 600],
      ['Spain', 400],
      ['Japan', 400],
      ['Belgium', 200],
      ['RU', 300]
      
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }