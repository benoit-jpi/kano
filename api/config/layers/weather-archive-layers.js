const forecastZIndex = 300

module.exports = function ({ wmtsUrl, wmsUrl, wcsUrl, k2Url, s3Url }) {
  return [
  {
    name: "Layers.S3_ARCHIVE_PRECIPITATIONS",
    description: "Layers.PRECIPITATIONS_DESCRIPTION",
    i18n: {
      fr: {
        Layers: {
          S3_ARCHIVE_PRECIPITATIONS: "Précipitations (S3)",
          PRECIPITATIONS_DESCRIPTION: "Accumulation pour 3h"
        },
        Variables: {
          PRECIPITATIONS: "Précipitations"
        }
      },
      en: {
        Layers: {
          S3_ARCHIVE_PRECIPITATIONS: "Precipitations (S3)",
          PRECIPITATIONS_DESCRIPTION: "Accumulation per 3h"
        },
        Variables: {
          PRECIPITATIONS: "Precipitations"
        }
      }
    },
    tags: ["weather", "archive"],
    iconUrl:
    "https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/precipitations.png",
    attribution:
    'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: "OverlayLayer",
    variables: [
      {
        name: "precipitations",
        label: "Variables.PRECIPITATIONS",
        units: ["mm"],
        range: [0, 300],
        chartjs: {
          backgroundColor: "rgba(54, 162, 235, 128)",
          borderColor: "rgb(54, 162, 235)",
          fill: false
        },
        chromajs: {
          scale: "BuPu",
          classes: [0, 1, 2, 4, 10, 25, 50, 100, 300]
        }
      }
    ],
    meteo_model: [
      {
        model: "gfs-world",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/precipitations/surface/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arpege-world",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/precipitations/surface/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arpege-europe",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/precipitations/surface/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arome-france",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/precipitations/surface/<%- file %>.cog"
          }
        },
        geotiff: {}
      }
    ],
    leaflet: {
      type: "tiledMeshLayer",
      resolutionScale: [2.0, 2.0],
      opacity: 0.6,
      "icon-classes": "fas fa-cloud-rain",
      zIndex: forecastZIndex
    }
  },
  {
    name: "Layers.S3_ARCHIVE_TEMPERATURE",
    description: "Layers.TEMPERATURE_DESCRIPTION",
    i18n: {
      fr: {
        Layers: {
          S3_ARCHIVE_TEMPERATURE: "Température (S3)",
          TEMPERATURE_DESCRIPTION: "Température moyenne"
        },
        Variables: {
          TEMPERATURE: "Température"
        }
      },
      en: {
        Layers: {
          S3_ARCHIVE_TEMPERATURE: "Temperature (S3)",
          TEMPERATURE_DESCRIPTION: "Mean temperature"
        },
        Variables: {
          TEMPERATURE: "Temperature"
        }
      }
    },
    tags: ["weather", "archive"],
    iconUrl:
    "https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/temperature.png",
    attribution:
    'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: "OverlayLayer",
    variables: [
      {
        name: "temperature",
        label: "Variables.TEMPERATURE",
        units: ["degC", "degF", "K"],
        range: [-20, 50],
        chartjs: {
          backgroundColor: "rgba(255, 215, 0, 128)",
          borderColor: "rgb(255, 215, 0)",
          fill: false
        },
        chromajs: {
          scale: "RdBu",
          invertScale: true,
          domain: [-20, 50]
        }
      }
    ],
    /* When available at different levels
       levels: {
       name: 'pressure',
       label: 'Levels.PRESSURE',
       units: [
       'mb'
       ],
       values: [ 1000, 700, 450, 300, 200 ]
       }, */
    meteo_model: [
      {
        model: "gfs-world",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/temperature/2/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arpege-world",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/temperature/2/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arpege-europe",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/temperature/2/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arome-france",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/temperature/2/<%- file %>.cog"
          }
        },
        geotiff: {}
      }
    ],
    leaflet: {
      type: "tiledMeshLayer",
      resolutionScale: [2.0, 2.0],
      opacity: 0.6,
      "icon-classes": "fas fa-temperature-high",
      zIndex: forecastZIndex
    }
  },
  {
    name: 'Layers.S3_ARCHIVE_GUST',
    description: 'Layers.GUST_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          S3_ARCHIVE_GUST: 'Rafales (S3)',
          GUST_DESCRIPTION: 'Vitesse maximale du vent'
        },
        Variables: {
          GUST: 'Rafales'
        }
      },
      en: {
        Layers: {
          S3_ARCHIVE_GUST: 'Gust (S3)',
          GUST_DESCRIPTION: 'Maximum wind speed'
        },
        Variables: {
          GUST: 'Gust'
        }
      }
    },
    tags: [
      'weather', 'archive'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/gust.jpg',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'gust',
        label: 'Variables.GUST',
        units: [
          'm/s', 'km/h', 'kt'
        ],
        range: [0, 60],
        chartjs: {
          backgroundColor: 'rgba(255, 99, 132, 128)',
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        },
        chromajs: {
          scale: 'OrRd',
          domain: [0, 40]
        }
      }
    ],
    meteo_model: [
      {
        model: "gfs-world",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/gust/10/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arpege-world",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/gust/10/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arpege-europe",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/gust/10/<%- file %>.cog"
          }
        },
        geotiff: {}
      },
      {
        model: "arome-france",
        from: "P-60D",
        to: "PT-6H",
        dynprops: {
          url: {
            strTemplate:
            "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/gust/10/<%- file %>.cog"
          }
        },
        geotiff: {}
      }
    ],
    leaflet: {
      type: "tiledMeshLayer",
      resolutionScale: [2.0, 2.0],
      opacity: 0.6,
      "icon-classes": "fas fa-temperature-high",
      zIndex: forecastZIndex
    }
  },
  {
    name: "Layers.S3_ARCHIVE_WIND",
    description: "Layers.WIND_DESCRIPTION",
    i18n: {
      fr: {
        Layers: {
          S3_ARCHIVE_WIND: "Vent (S3)",
          WIND_DESCRIPTION: "Vitesse et direction"
        },
        Variables: {
          WIND_SPEED: "Vitesse",
          WIND_DIRECTION: "Direction"
        },
        Levels: {
          PRESSURE: "Pression"
        }
      },
      en: {
        Layers: {
          S3_ARCHIVE_WIND: "Wind (S3)",
          WIND_DESCRIPTION: "Speed and direction"
        },
        Variables: {
          WIND_SPEED: "Speed",
          WIND_DIRECTION: "Direction"
        },
        Levels: {
          PRESSURE: "Pressure"
        }
      }
    },
    tags: ["weather", "archive"],
    iconUrl:
    "https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/wind.jpg",
    attribution:
    'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: "OverlayLayer",
    variables: [
      {
        name: "windSpeed",
        label: "Variables.WIND_SPEED",
        units: ["m/s", "km/h", "kt"],
        range: [0, 60],
        chartjs: {
          backgroundColor: "rgba(255, 159, 64, 128)",
          borderColor: "rgb(255, 159, 64)",
          fill: false
        },
        chromajs: {
          scale: "RdYlBu",
          domain: [20, 3]
        }
      },
      {
        name: "windDirection",
        label: "Variables.WIND_DIRECTION",
        units: ["deg"],
        range: [0, 360],
        chartjs: {
          backgroundColor: "rgba(191, 191, 63, 128)",
          borderColor: "rgb(191, 191, 63)",
          fill: false
        }
      }
    ],
    /* When available at different levels
       levels: {
       name: 'pressure',
       label: 'Levels.PRESSURE',
       units: [
       'mb'
       ],
       values: [ 1000, 700, 450, 300, 200 ]
       }, */
    u: {
      meteo_model: [
        {
          model: "gfs-world",
          from: "P-60D",
          to: "PT-6H",
          dynprops: {
            url: {
              strTemplate:
              "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/u-wind/10/<%- file %>.cog"
            }
          },
          geotiff: {}
        },
        {
          model: "arpege-world",
          from: "P-60D",
          to: "PT-6H",
          dynprops: {
            url: {
              strTemplate:
              "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/u-wind/10/<%- file %>.cog"
            }
          },
          geotiff: {}
        },
        {
          model: "arpege-europe",
          from: "P-60D",
          to: "PT-6H",
          dynprops: {
            url: {
              strTemplate:
              "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/u-wind/10/<%- file %>.cog"
            }
          },
          geotiff: {}
        },
        {
          model: "arome-france",
          from: "P-60D",
          to: "PT-6H",
          dynprops: {
            url: {
              strTemplate:
              "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/u-wind/10/<%- file %>.cog"
            }
          },
          geotiff: {}
        }
      ]
    },
    v: {
      meteo_model: [
        {
          model: "gfs-world",
          from: "P-60D",
          to: "PT-6H",
          dynprops: {
            url: {
              strTemplate:
              "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/v-wind/10/<%- file %>.cog"
            }
          },
          geotiff: {}
        },
        {
          model: "arpege-world",
          from: "P-60D",
          to: "PT-6H",
          dynprops: {
            url: {
              strTemplate:
              "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/v-wind/10/<%- file %>.cog"
            }
          },
          geotiff: {}
        },
        {
          model: "arpege-europe",
          from: "P-60D",
          to: "PT-6H",
          dynprops: {
            url: {
              strTemplate:
              "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/v-wind/10/<%- file %>.cog"
            }
          },
          geotiff: {}
        },
        {
          model: "arome-france",
          from: "P-60D",
          to: "PT-6H",
          dynprops: {
            url: {
              strTemplate:
              "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = forecastTime.format('YYYY-MM-DD-HH') %>https://kargo.s3.eu-central-1.amazonaws.com/archive/<%- model.name %>/<%- folder %>/v-wind/10/<%- file %>.cog"
            }
          },
          geotiff: {}
        }
      ]
    },
    leaflet: {
      type: "tiledWindLayer",
      lineWidth: 4,
      frameRate: 20,
      particleMultiplier: 0.001,
      displayValues: false,
      "icon-classes": "fas fa-wind",
      zIndex: forecastZIndex,
      /*
        displayOptions: {
        velocityType: 'Wind',
        position: 'bottomright',
        emptyString: 'No wind data',
        angleConvention: 'meteoCW',
        speedUnit: 'm/s'
        }
      */
    }
  }]
}