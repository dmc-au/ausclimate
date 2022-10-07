// World, Aus, and 'blank' colours
// W = "#999"
W = "#8e5ea2";
A = "#3e95cd";
B = "#999";


// Olympic rankings
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
              backgroundColor: [B,B,B,B,B,B,B,B,A,B],
              data: medalData,

            }
          ]
        },
        options: {
          // responsive: true,
          // maintainAspectRatio: false,
          legend: { display: false },
          title: {
            display: true,
            text: 'Total Olympic Medal Count by Country (1896-2016)'
          }
        }
    });
};


// Australia's Climate Ranking
d3.csv('Data/CCPI/aus.csv')
    .then(make_ccpi);

function make_ccpi(years) {
    var yearLabels = years.map(function(d) {return d.Year});
    var auData = years.map(function(d) {return d.Rank});

    var chart = new Chart(document.getElementById("ccpi"), {
        type: 'line',
        data: {
          labels: yearLabels,
          datasets: [{ 
              data: auData,
              label: "AU",
              borderColor: A,
              fill: false,
              pointRadius: 1
            }
          ]
        },
        options: {
            title: {
              display: true,
              text: "Australia's Climate Ranking"
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    reverse: true
                  }
                }
              ]
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
              backgroundColor: A,
              fill: '+1',
              pointRadius: 1
            }, { 
              data: worldData,
              label: "World",
              borderColor: W,
              backgroundColor: W,
              fill: 'origin',
              pointRadius: 1
            } 
          ]
        },
        options: {
          title: {
              display: true,
              text: 'Energy Demand (GJ) Per Capita'
          },
          scales: {
            yAxes: [{
                stacked: false,
                ticks: {
                  suggestedMin: 0
                }
            }]
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
              backgroundColor: A,
              fill: '+1',
              pointRadius: 1
            }, { 
              data: worldData,
              label: "World",
              borderColor: W,
              backgroundColor: W,
              fill: 'origin',
              pointRadius: 1
            } 
          ]
        },
        options: {
          title: {
                display: true,
                text: 'CO2 Emissions (t) Per Capita'
          },
          scales: {
            yAxes: [{
                stacked: false,
                ticks: {
                  suggestedMin: 0
                }
            }]
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
              backgroundColor: A,
              fill: 'origin',
              pointRadius: 1
            }, { 
              data: worldData,
              label: "World",
              borderColor: W,
              backgroundColor: W,
              fill: '-1',
              pointRadius: 1
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


// Australian New Small Scale Solar Installations
d3.csv("Data/NGER/Small Scale/smallscale_renewables.csv")
    .then(make_small_renewables);

function make_small_renewables(years) {
    var yearLabels = years.map(function(d) {return d['Year']});
    var solarData = years.map(function(d) {return d['Solar']});

    var chart = new Chart(document.getElementById("solar"), {
        type: 'bar',
        data: {
          labels: yearLabels,
          datasets: [
            {
              label: "New Small Solar Systems",
              backgroundColor: batteryColour,
              data: batteryData
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Australian New Small Scale Solar Installations'
          }
        }
    });
};


// Australian New Small Scale Battery Installations
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


// Australian Corporate Emissions
d3.csv("Data/NGER/Corporate/total_corporate.csv")
    .then(make_corporate);

function make_corporate(years) {
    var yearLabels = years.map(function(d) {return d['years']});
    var scope1Data = years.map(function(d) {return d['scope 1 sum']});
    var scope2Data = years.map(function(d) {return d['scope 2 sum']});

    var chart = new Chart(document.getElementById("corporate"), {
      type: 'line',
      data: {
        labels: yearLabels,
        datasets: [{ 
            data: scope1Data,
            label: "Scope 1",
            borderColor: "#c45850",
            backgroundColor: "#c45850",
            fill: '+1',
            pointRadius: 1
          }, { 
            data: scope2Data,
            label: "Scope 2",
            borderColor: "#e8c3b9",
            backgroundColor: "#e8c3b9",
            fill: 'origin',
            pointRadius: 1
          } 
        ]
      },
      options: {
        title: {
              display: true,
              text: 'Australian Corporate CO2 Emissions (Mt)'
        },
        scales: {
          yAxes: [{
              stacked: false,
              ticks: {
                suggestedMin: 0
              }
          }]
        }
      }
  });
};