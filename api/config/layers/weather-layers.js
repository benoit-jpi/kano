const forecastZIndex = 300

module.exports = function ({ wmtsUrl, wmsUrl, wcsUrl, k2Url, s3Url }) {
  return [
  {
    name: 'Layers.WIND',
    description: 'Layers.WIND_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          WIND: 'Vent',
          WIND_DESCRIPTION: 'Vitesse et direction'
        },
        Variables: {
          WIND_SPEED: 'Vitesse',
          WIND_DIRECTION: 'Direction'
        },
        Levels: {
          PRESSURE: 'Pression'
        }
      },
      en: {
        Layers: {
          WIND: 'Wind',
          WIND_DESCRIPTION: 'Speed and direction'
        },
        Variables: {
          WIND_SPEED: 'Speed',
          WIND_DIRECTION: 'Direction'
        },
        Levels: {
          PRESSURE: 'Pressure'
        }
      }
    },
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/wind.jpg',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'windSpeed',
        label: 'Variables.WIND_SPEED',
        units: [
          'm/s', 'km/h', 'kt'
        ],
        range: [0, 70],
        step: 1,
        chartjs: {
          backgroundColor: 'rgba(255, 159, 64, 128)',
          borderColor: 'rgb(255, 159, 64)',
          fill: false
        },
        chromajs: {
          scale: 'RdYlBu',
          domain: [20, 3]
        }
      },
      {
        name: 'windDirection',
        label: 'Variables.WIND_DIRECTION',
        units: [
          'deg'
        ],
        range: [0, 360],
        step: 1,
        chartjs: {
          backgroundColor: 'rgba(191, 191, 63, 128)',
          borderColor: 'rgb(191, 191, 63)',
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
    leaflet: {
      type: 'weacast.flowLayer',
      elements: [
        'u-wind',
        'v-wind'
      ],
      lineWidth: 4,
      frameRate: 20,
      particleMultiplier: 0.001,
      displayValues: false,
      'icon-classes': 'fas fa-wind',
      zIndex: forecastZIndex
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
  },
  {
    name: 'Layers.GUST',
    description: 'Layers.GUST_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          GUST: 'Rafales',
          GUST_DESCRIPTION: 'Vitesse maximale du vent'
        },
        Variables: {
          GUST: 'Rafales'
        }
      },
      en: {
        Layers: {
          GUST: 'Gust',
          GUST_DESCRIPTION: 'Maximum wind speed'
        },
        Variables: {
          GUST: 'Gust'
        }
      }
    },
    tags: [
      'weather'
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
        range: [0, 70],
        step: 1,
        chartjs: {
          backgroundColor: 'rgba(255, 99, 132, 128)',
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        },
        chromajs: {
          scale: 'OrRd'
        }
      }
    ],
    leaflet: {
      type: 'weacast.scalarLayer',
      elements: [
        'gust'
      ],
      'icon-classes': 'fas fa-wind',
      zIndex: forecastZIndex,
      mesh: true
    }
  },
  {
    name: 'Layers.PRECIPITATIONS',
    description: 'Layers.PRECIPITATIONS_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          PRECIPITATIONS: 'Précipitations',
          PRECIPITATIONS_DESCRIPTION: 'Accumulation pour 3h'
        },
        Variables: {
          PRECIPITATIONS: 'Précipitations'
        }
      },
      en: {
        Layers: {
          PRECIPITATIONS: 'Precipitations',
          PRECIPITATIONS_DESCRIPTION: 'Accumulation per 3h'
        },
        Variables: {
          PRECIPITATIONS: 'Precipitations'
        }
      }
    },
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/precipitations.png',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'precipitations',
        label: 'Variables.PRECIPITATIONS',
        units: [
          'mm'
        ],
        range: [0, 300],
        step: 2,
        chartjs: {
          backgroundColor: 'rgba(54, 162, 235, 128)',
          borderColor: 'rgb(54, 162, 235)',
          fill: false
        },
        chromajs: {
          scale: 'BuPu',
          classes: [
            0,
            1,
            2,
            4,
            10,
            25,
            50,
            100,
            300
          ]
        }
      }
    ],
    leaflet: {
      type: 'weacast.scalarLayer',
      elements: [
        'precipitations'
      ],
      'icon-classes': 'fas fa-cloud-rain',
      zIndex: forecastZIndex,
      mesh: true
    }
  },
  {
    name: 'Layers.TEMPERATURE',
    description: 'Layers.TEMPERATURE_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          TEMPERATURE: 'Température',
          TEMPERATURE_DESCRIPTION: 'Température moyenne'
        },
        Variables: {
          TEMPERATURE: 'Température'
        }
      },
      en: {
        Layers: {
          TEMPERATURE: 'Temperature',
          TEMPERATURE_DESCRIPTION: 'Mean temperature'
        },
        Variables: {
          TEMPERATURE: 'Temperature'
        }
      }
    },
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/temperature.png',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'temperature',
        label: 'Variables.TEMPERATURE',
        units: [
          'degC', 'degF', 'K'
        ],
        range: [-20, 50],
        step: 1,
        chartjs: {
          backgroundColor: 'rgba(255, 215, 0, 128)',
          borderColor: 'rgb(255, 215, 0)',
          fill: false
        },
        chromajs: {
          scale: 'RdBu',
          invertScale: true
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
    leaflet: {
      type: 'weacast.scalarLayer',
      elements: [
        'temperature'
      ],
      'icon-classes': 'fas fa-temperature-high',
      zIndex: forecastZIndex,
      mesh: true
    }
  },

  {
    name: 'Layers.WIND_TILED',
    description: 'Layers.WIND_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          WIND_TILED: 'Vent (tuilé)',
          WIND_DESCRIPTION: 'Vitesse et direction'
        },
        Variables: {
          WIND_SPEED: 'Vitesse',
          WIND_DIRECTION: 'Direction'
        },
        Levels: {
          PRESSURE: 'Pression'
        }
      },
      en: {
        Layers: {
          WIND_TILED: 'Wind (tiled)',
          WIND_DESCRIPTION: 'Speed and direction'
        },
        Variables: {
          WIND_SPEED: 'Speed',
          WIND_DIRECTION: 'Direction'
        },
        Levels: {
          PRESSURE: 'Pressure'
        }
      }
    },
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/wind.jpg',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'windSpeed',
        label: 'Variables.WIND_SPEED',
        units: [
          'm/s', 'km/h', 'kt'
        ],
        range: [0, 70],
        step: 1,
        chartjs: {
          backgroundColor: 'rgba(255, 159, 64, 128)',
          borderColor: 'rgb(255, 159, 64)',
          fill: false
        },
        chromajs: {
          scale: 'RdYlBu',
          domain: [20, 3]
        }
      },
      {
        name: 'windDirection',
        label: 'Variables.WIND_DIRECTION',
        units: [
          'deg'
        ],
        range: [0, 360],
        step: 1,
        chartjs: {
          backgroundColor: 'rgba(191, 191, 63, 128)',
          borderColor: 'rgb(191, 191, 63)',
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
          model: 'gfs-world',
          from: 'PT-1H',
          to: 'PT+864000S',
          weacast: { element: 'u-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        },
        {
          model: 'arpege-world',
          from: 'PT-1H',
          to: 'PT+367200S',
          weacast: { element: 'u-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        },
        {
          model: 'arpege-europe',
          from: 'PT-1H',
          to: 'PT+367200S',
          weacast: { element: 'u-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        },
        {
          model: 'arome-france',
          from: 'PT-1H',
          to: 'PT+151200S',
          weacast: { element: 'u-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        },
        {
          model: 'arome-france-high',
          from: 'PT-1H',
          to: 'PT+151200S',
          weacast: { element: 'u-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        }
      ]
    },
    v: {
      meteo_model: [
        {
          model: 'gfs-world',
          from: 'PT-1H',
          to: 'PT+864000S',
          weacast: { element: 'v-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        },
        {
          model: 'arpege-world',
          from: 'PT-1H',
          to: 'PT+367200S',
          weacast: { element: 'v-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        },
        {
          model: 'arpege-europe',
          from: 'PT-1H',
          to: 'PT+367200S',
          weacast: { element: 'v-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        },
        {
          model: 'arome-france',
          from: 'PT-1H',
          to: 'PT+151200S',
          weacast: { element: 'v-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        },
        {
          model: 'arome-france-high',
          from: 'PT-1H',
          to: 'PT+151200S',
          weacast: { element: 'v-wind' },
          dynprops: {
            forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
            model: { strTemplate: '<%- model.name %>' }
          }
        }
      ],
    },
    leaflet: {
      type: 'tiledWindLayer',
      lineWidth: 4,
      frameRate: 20,
      particleMultiplier: 0.001,
      displayValues: false,
      'icon-classes': 'fas fa-wind',
      zIndex: forecastZIndex
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
  },
  {
    name: 'Layers.GUST_TILED',
    description: 'Layers.GUST_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          GUST_TILED: 'Rafales (tuilé)',
          GUST_DESCRIPTION: 'Vitesse maximale du vent'
        },
        Variables: {
          GUST: 'Rafales'
        }
      },
      en: {
        Layers: {
          GUST_TILED: 'Gust (tiled)',
          GUST_DESCRIPTION: 'Maximum wind speed'
        },
        Variables: {
          GUST: 'Gust'
        }
      }
    },
    tags: [
      'weather'
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
        range: [0, 70],
        step: 1,
        chartjs: {
          backgroundColor: 'rgba(255, 99, 132, 128)',
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        },
        chromajs: {
          scale: 'OrRd'
        }
      }
    ],
    meteo_model: [
      {
        model: 'gfs-world',
        from: 'PT-1H',
        to: 'PT864000S',
        weacast: { element: 'gust' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        },
      },
      {
        model: 'arpege-world',
        from: 'PT-1H',
        to: 'PT367200S',
        weacast: { element: 'gust' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arpege-europe',
        from: 'PT-1H',
        to: 'PT367200S',
        weacast: { element: 'gust' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arome-france',
        from: 'PT-1H',
        to: 'PT151200S',
        weacast: { element: 'gust' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arome-france-high',
        from: 'PT-1H',
        to: 'PT151200S',
        weacast: { element: 'gust' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      }
    ],
    leaflet: {
      type: 'tiledMeshLayer',
      resolutionScale: [ 2.0, 2.0 ],
      opacity: 0.6,
      'icon-classes': 'fas fa-wind',
      zIndex: forecastZIndex
    }
  },
  {
    name: 'Layers.PRECIPITATIONS_TILED',
    description: 'Layers.PRECIPITATIONS_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          PRECIPITATIONS_TILED: 'Précipitations (tuilé)',
          PRECIPITATIONS_DESCRIPTION: 'Accumulation pour 3h'
        },
        Variables: {
          PRECIPITATIONS: 'Précipitations'
        }
      },
      en: {
        Layers: {
          PRECIPITATIONS_TILED: 'Precipitations (tiled)',
          PRECIPITATIONS_DESCRIPTION: 'Accumulation per 3h'
        },
        Variables: {
          PRECIPITATIONS: 'Precipitations'
        }
      }
    },
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/precipitations.png',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'precipitations',
        label: 'Variables.PRECIPITATIONS',
        units: [
          'mm'
        ],
        range: [0, 300],
        step: 2,
        chartjs: {
          backgroundColor: 'rgba(54, 162, 235, 128)',
          borderColor: 'rgb(54, 162, 235)',
          fill: false
        },
        chromajs: {
          scale: 'BuPu',
          classes: [
            0,
            1,
            2,
            4,
            10,
            25,
            50,
            100,
            300
          ]
        }
      }
    ],
    meteo_model: [
      {
        model: 'gfs-world',
        from: 'PT-1H',
        to: 'PT864000S',
        weacast: { element: 'precipitations' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arpege-world',
        from: 'PT-1H',
        to: 'PT367200S',
        weacast: { element: 'precipitations' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arpege-europe',
        from: 'PT-1H',
        to: 'PT367200S',
        weacast: { element: 'precipitations' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arome-france',
        from: 'PT-1H',
        to: 'PT151200S',
        weacast: { element: 'precipitations' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arome-france-high',
        from: 'PT-1H',
        to: 'PT151200S',
        weacast: { element: 'precipitations' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      }
    ],
    leaflet: {
      type: 'tiledMeshLayer',
      resolutionScale: [ 2.0, 2.0 ],
      opacity: 0.6,
      'icon-classes': 'fas fa-cloud-rain',
      zIndex: forecastZIndex
    }
  },
  {
    name: 'Layers.TEMPERATURE_TILED',
    description: 'Layers.TEMPERATURE_DESCRIPTION',
    i18n: {
      fr: {
        Layers: {
          TEMPERATURE_TILED: 'Température (tuilé)',
          TEMPERATURE_DESCRIPTION: 'Température moyenne'
        },
        Variables: {
          TEMPERATURE: 'Température'
        }
      },
      en: {
        Layers: {
          TEMPERATURE_TILED: 'Temperature (tiled)',
          TEMPERATURE_DESCRIPTION: 'Mean temperature'
        },
        Variables: {
          TEMPERATURE: 'Temperature'
        }
      }
    },
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/temperature.png',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'temperature',
        label: 'Variables.TEMPERATURE',
        units: [
          'degC', 'degF', 'K'
        ],
        range: [-20, 50],
        step: 1,
        chartjs: {
          backgroundColor: 'rgba(255, 215, 0, 128)',
          borderColor: 'rgb(255, 215, 0)',
          fill: false
        },
        chromajs: {
          scale: 'RdBu',
          invertScale: true
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
        model: 'gfs-world',
        from: 'PT-1H',
        to: 'PT864000S',
        weacast: { element: 'temperature' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arpege-world',
        from: 'PT-1H',
        to: 'PT367200S',
        weacast: { element: 'temperature' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arpege-europe',
        from: 'PT-1H',
        to: 'PT367200S',
        weacast: { element: 'temperature' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arome-france',
        from: 'PT-1H',
        to: 'PT151200S',
        weacast: { element: 'temperature' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      },
      {
        model: 'arome-france-high',
        from: 'PT-1H',
        to: 'PT151200S',
        weacast: { element: 'temperature' },
        dynprops: {
          forecastTime: { strTemplate: '<% const time = forecastTime.format() %><%- time %>' },
          model: { strTemplate: '<%- model.name %>' }
        }
      }
    ],
    leaflet: {
      type: 'tiledMeshLayer',
      resolutionScale: [ 2.0, 2.0 ],
      opacity: 0.6,
      'icon-classes': 'fas fa-temperature-high',
      zIndex: forecastZIndex
    }
  }]
}