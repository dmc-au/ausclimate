// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});


// CO2 Emissions (t) Per Capita 
d3.csv('Data/ClimateActionTracker/CAT_tCO2e_cap.csv')
    .then(make_tCO2);

function make_tCO2(years) {
    var yearLabels = years.map(function(d) {return d.Year});
    var auData = years.map(function(d) {return d.AU});
    var worldData = years.map(function(d) {return d.World});

    var chart = new Chart(document.getElementById("tco2e"), {
        type: 'line',
        data: {
          labels: yearLabels,
          datasets: [{ 
              data: auData,
              label: "AU",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: worldData,
              label: "World",
              borderColor: "#8e5ea2",
              fill: false
            } 
          ]
        },
        options: {
          title: {
            display: true,
            text: 'CO2 Emissions (t) Per Capita'
          }
        }
    });
};


// Energy Demand (GJ) Per Capita
d3.csv('Data/ClimateActionTracker/CAT_energy_demand_GJ_cap.csv')
    .then(make_energy_demand);

function make_energy_demand(years) {
    var yearLabels = years.map(function(d) {return d.Year});
    var auData = years.map(function(d) {return d.AU});
    var worldData = years.map(function(d) {return d.World});

    var chart = new Chart(document.getElementById("demand"), {
        type: 'line',
        data: {
          labels: yearLabels,
          datasets: [{ 
              data: auData,
              label: "AU",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: worldData,
              label: "World",
              borderColor: "#8e5ea2",
              fill: false
            } 
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Energy Demand (GJ) Per Capita'
          }
        }
    });
};


// % Proportion of Renewable Energy Production
d3.csv('Data/ClimateActionTracker/CAT_percent_renewables.csv')
    .then(make_renewables);

function make_renewables(years) {
    var yearLabels = years.map(function(d) {return d.Year});
    var auData = years.map(function(d) {return d.AU});
    var worldData = years.map(function(d) {return d.World});

    var chart = new Chart(document.getElementById("renewables"), {
        type: 'line',
        data: {
          labels: yearLabels,
          datasets: [{ 
              data: auData,
              label: "AU",
              borderColor: "#3e95cd",
              fill: false
            }, { 
              data: worldData,
              label: "World",
              borderColor: "#8e5ea2",
              fill: false
            } 
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Proportion (%) of Renewable Energy Production'
          }
        }
    });
};


// Bubble chart
new Chart(document.getElementById("bubble-chart"), {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["China"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 21269017,
            y: 5.245,
            r: 15
          }]
        }, {
          label: ["Denmark"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 258702,
            y: 7.526,
            r: 10
          }]
        }, {
          label: ["Germany"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 6.994,
            r: 15
          }]
        }, {
          label: ["Japan"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4931877,
            y: 5.921,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Happiness"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "GDP (PPP)"
          }
        }]
      }
    }
});


// Bar chart: grouped
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});


// Bar chart: horizontal
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});