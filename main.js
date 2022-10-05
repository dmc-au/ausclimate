W = "#888"
A = "#3e95cd";

d3.csv('Data/Olympic/Kaggle2/olympic_rankings.csv')
    .then(make_olympic);

function make_olympic(countries) {
    var countryLabels = countries.map(function(d) {return d.NOC});
    var medalData = countries.map(function(d) {return d['Medal Val']});

    var chart = new Chart(document.getElementById("olympic"), {
        type: 'bar',
        data: {
          labels: countryLabels,
          datasets: [
            {
              label: "Medal Count",
              backgroundColor: [W,W,W,W,W,W,W,W,A,W],
              data: medalData
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Total Olympic Medal Count by Country (1896-2016)'
          }
        }
    });
};


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
              borderColor: A,
              fill: false
            }, { 
              data: worldData,
              label: "World",
              borderColor: W,
              fill: false
            } 
          ]
        },
        options: {
            // scales: {
            //     yAxes: [{
            //         display: true,
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // },
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
              borderColor: A,
              fill: false
            }, { 
              data: worldData,
              label: "World",
              borderColor: W,
              fill: false
            } 
          ]
        },
        options: {
            // scales: {
            //     yAxes: [{
            //         display: true,
            //         ticks: {
            //             suggestedMin: 20,
            //             suggestedMax: 180
            //         }
            //     }]
            // },
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
              borderColor: A,
              fill: false
            }, { 
              data: worldData,
              label: "World",
              borderColor: W,
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


// Australian Small Scale Battery Installations
d3.csv("Data/NGER/Small Scale/smallscale_battery_numeric.csv")
    .then(make_battery);

function make_battery(years) {
    var yearLabels = years.map(function(d) {return d['Installation year']});
    var batteryData = years.map(function(d) {return d['Total']});
    var batteryColour = years.map(function(d) {return A});

    var chart = new Chart(document.getElementById("battery"), {
        type: 'bar',
        data: {
          labels: yearLabels,
          datasets: [
            {
              label: "No. New Batteries",
              backgroundColor: batteryColour,
              data: batteryData
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'No. Australian Small Scale Battery Installations Per Year'
          }
        }
    });
};


// Example Radar Chart
new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});