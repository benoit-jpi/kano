// Override defaults if env provided
const kargoDomain = (process.env.SUBDOMAIN ? process.env.SUBDOMAIN : 'test.kalisio.xyz')
const wmtsUrl = (process.env.API_GATEWAY ? 'https://api.' + kargoDomain + '/wmts' : 'https://mapproxy.' + kargoDomain + '/wmts')
const wmsUrl = (process.env.API_GATEWAY ? 'https://api.' + kargoDomain + '/wms' : 'https://mapproxy.' + kargoDomain + '/wms')
const wcsUrl = (process.env.API_GATEWAY ? 'https://api.' + kargoDomain + '/wcs' : 'https://mapserver.' + kargoDomain + '/cgi-bin/ows')
const k2Url = (process.env.API_GATEWAY ? 'https://api.' + kargoDomain + '/k2' : 'https://k2.' + kargoDomain)
const s3Url = (process.env.API_GATEWAY ? 'https://api.' + kargoDomain + '/s3' : 'https://s3.eu-central-1.amazonaws.com')
const forecastZIndex = 300

module.exports = [
  {
    name: 'Sentinel 2',
    description: 'Cloudless',
    tags: [
      'imagery'
    ],
    iconUrl: `${wmtsUrl}/s2/GLOBAL_WEBMERCATOR/0/0/0.jpeg`,
    icon: 'satellite',
    attribution: 'Sentinel-2 cloudless <a href="https://s2maps.eu">by EOX IT Services GmbH </a>',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${wmtsUrl}/s2/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.jpeg`,
      maxZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      isVisible: true,
      fileExtension: 'jpeg',
      url: `${wmtsUrl}/s2/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'OSM Bright',
    description: 'OpenStreetMap',
    tags: [
      'street'
    ],
    iconUrl: `${wmtsUrl}/osm-bright/GLOBAL_WEBMERCATOR/0/0/0.png`,
    icon: 'streetview',
    attribution: 'OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      isVisible: true,
      source: `${wmtsUrl}/osm-bright/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${wmtsUrl}/osm-bright/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'OSM Dark',
    description: 'OpenStreetMap',
    tags: [
      'street'
    ],
    iconUrl: `${wmtsUrl}/osm-dark/GLOBAL_WEBMERCATOR/0/0/0.png`,
    icon: 'streetview',
    attribution: 'OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${wmtsUrl}/osm-dark/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${wmtsUrl}/osm-dark/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'OSMT bright',
    description: 'OpenStreetMap & Terrain',
    tags: [
      'street',
      'terrain'
    ],
    iconUrl: `${wmtsUrl}/osm-terrain-bright/GLOBAL_WEBMERCATOR/0/0/0.png`,
    icon: 'terrain',
    attribution: 'OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${wmtsUrl}/osm-terrain-bright/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${wmtsUrl}/osm-terrain-bright/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'OSMT dark',
    description: 'OpenStreetMap & Terrain',
    tags: [
      'street',
      'terrain'
    ],
    iconUrl: `${wmtsUrl}/osm-terrain-dark/GLOBAL_WEBMERCATOR/0/0/0.png`,
    icon: 'terrain',
    attribution: 'OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${wmtsUrl}/osm-terrain-dark/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.png`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${wmtsUrl}/osm-terrain-dark/GLOBAL_WEBMERCATOR`
    }
  },
  {
    name: 'Mosaic',
    description: 'Mosaic',
    tags: [
      'street',
      'imagery'
    ],
    iconUrl: `${wmtsUrl}/mosaic/GLOBAL_WEBMERCATOR/0/0/0.jpeg`,
    icon: 'terrain',
    attribution: 'BD Ortho <a href="http://www.ign.fr/">by IGN</a>, Sentinel-2 cloudless <a href="https://s2maps.eu">by EOX IT Services GmbH </a>, OpenMapTiles © <a href="https://openmaptiles.com">OpenMapTiles</a> & OpenStreetMap © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    type: 'BaseLayer',
    leaflet: {
      type: 'tileLayer',
      source: `${wmtsUrl}/mosaic/GLOBAL_WEBMERCATOR/{z}/{x}/{y}.jpeg`,
      maxZoom: 21,
      maxNativeZoom: 18
    },
    cesium: {
      type: 'OpenStreetMap',
      url: `${wmtsUrl}/mosaic/GLOBAL_WEBMERCATOR`,
      fileExtension: 'jpeg'
    }
  },
  {
    name: 'WGS84',
    description: 'Standard Ellipsoid',
    tags: [
      'terrain'
    ],
    iconUrl: 'statics/Cesium/Widgets/Images/TerrainProviders/Ellipsoid.png',
    icon: 'fiber_manual_record',
    attribution: '',
    'default': true,
    type: 'TerrainLayer',
    cesium: {
      type: 'Ellipsoid',
      isVisible: true
    }
  },
  {
    name: 'Cesium Terrain',
    description: 'World-wide 30m',
    tags: [
      'terrain'
    ],
    iconUrl: 'statics/Cesium/Widgets/Images/TerrainProviders/CesiumWorldTerrain.png',
    icon: 'terrain',
    attribution: 'High-resolution, mesh-based terrain for the entire globe.\nBy https://cesiumjs.org',
    type: 'TerrainLayer',
    cesium: {
      type: 'Cesium',
      requestWaterMask: 'true',
      requestVertexNormals: 'true'
    }
  },
  {
    name: 'Kalisio Terrain',
    description: 'World-wide 30m',
    tags: [
      'terrain'
    ],
    iconUrl: 'statics/Cesium/Widgets/Images/TerrainProviders/CesiumWorldTerrain.png',
    icon: 'terrain',
    attribution: 'High-resolution, mesh-based terrain for the entire globe.\nBy http://www.kalisio.com',
    type: 'TerrainLayer',
    cesium: {
      type: 'Cesium',
      url: k2Url,
      requestWaterMask: 'true',
      requestVertexNormals: 'true'
    }
  },
  {
    name: 'Mapillary',
    description: 'Mapillary coverage',
    tags: [
      'captures'
    ],
    iconUrl: `https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/mapillary-icon.jpg`,
    attribution: 'Images from <a href="https://www.mapillary.com">Mapillary</a>, CC BY-SA',
    type: 'OverlayLayer',
    leaflet: {
      type: 'vectorGrid.protobuf',
      source: `https://tiles3.mapillary.com/v0.1/{z}/{x}/{y}.mvt`,
      interactive: true,
      minZoom: 11,
      maxNativeZoom: 14,
      vectorTileLayerStyles: {
        'mapillary-sequences': {
          weight: 2,
          color: '#59AF8499'
        },
        'mapillary-images': {
          opacity: 0
        }
	    }
    }
  },
  {
    name: 'Wind',
    description: 'Speed and direction',
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
        range: [0, 60],
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
    },*/
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
    name: 'Gust',
    description: 'Max wind speed',
    tags: [
      'weather'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/gust.jpg',
    attribution: 'Forecast data from <a href="http://www.meteofrance.com">Météo-France</a>',
    type: 'OverlayLayer',
    variables: [
      {
        name: 'gust',
        label: 'Variables.WIND_GUST',
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
    name: 'Precipitations',
    description: '3h accumulation',
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
    name: 'Temperature',
    description: 'Mean temperature',
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
        range: [0, 50],
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
    },*/
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
    name: 'Vigicrues',
    description: 'Carte de vigilance crues nationale',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/vigicrues-icon.png',
    attribution: '',
    type: 'OverlayLayer',
    featureId: 'gid',
    service: 'vigicrues',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    from: 'PT-15M',
    to: 'PT-15M',
    every: 'PT15M',
    leaflet: {
      type: 'geoJson',
      realtime: true,
      popup: {
        pick: [
          'NomEntVigiCru'
        ]
      }
    },
    cesium: {
      type: 'geoJson',
      realtime: true,
      popup: {
        pick: [
          'NomEntVigiCru'
        ]
      }
    }
  },
  {
    name: 'Hub\'Eau Hydrométrie',
    description: 'Données hydrométriques',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/hubeau-hydrometrie-icon.png',
    attribution: '',
    type: 'OverlayLayer',
    service: 'hubeau-observations',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    probeService: 'hubeau-stations',
    featureId: 'code_station',
    from: 'P-7D',
    to: 'PT-10M',
    every: 'PT10M',
    queryFrom: 'PT-30M',
    variables: [
      {
        name: 'H',
        label: 'Variables.H',
        units: [
          'm'
        ],
        range: [0, 10],
        chartjs: {
          backgroundColor: 'rgba(63, 63, 191, 128)',
          borderColor: 'rgb(63, 63, 191)',
          fill: false
        }
      },
      {
        name: 'Q',
        label: 'Variables.Q',
        units: [
          'm3/s'
        ],
        range: [0, 1000],
        chartjs: {
          backgroundColor: 'rgba(54, 162, 235, 128)',
          borderColor: 'rgb(54, 162, 235)',
          fill: false
        }
      }
    ],
    leaflet: {
      type: 'geoJson',
      realtime: true,
      tiled: true,
      minZoom: 12,
      cluster: { disableClusteringAtZoom: 18 },
      'marker-color': '#00a9ce',
      'icon-color': 'white',
      'icon-classes': 'fa fa-tint',
      popup: {
        pick: [
          'name'
        ]
      },
      tooltip: {
        template: `<% if (properties.H) { %>H = <%= properties.H.toFixed(2) %> m</br><% }
                   if (feature.time && feature.time.H) { %><%= new Date(feature.time.H).toLocaleString() %></br><% }
                   if (properties.Q) { %>Q = <%= properties.Q.toFixed(2) %> m3/s</br><% }
                   if (feature.time && feature.time.Q) { %><%= new Date(feature.time.Q).toLocaleString() %></br><% } %>`
      }
    },
    cesium: {
      type: 'geoJson',
      realtime: true,
      cluster: { pixelRange: 50 },
      'marker-symbol': 'water',
      'marker-color': '#00a9ce',
      popup: {
        pick: [
          'libelle_station'
        ]
      },
      tooltip: {
        template: `<% if (properties.H) { %>H = <%= properties.H.toFixed(2) %> m\n<% }
                   if (feature.time && feature.time.H) { %><%= new Date(feature.time.H).toLocaleString() %>\n<% }
                   if (properties.Q) { %>Q = <%= properties.Q.toFixed(2) %> m3/s\n<% }
                   if (feature.time && feature.time.Q) { %><%= new Date(feature.time.Q).toLocaleString() %>\n<% } %>`
      }
    }
  },
  {
    name: 'OpenAQ',
    description: 'Air Quality data',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/openaq-icon.png',
    attribution: '',
    type: 'OverlayLayer',
    service: 'openaq',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    featureId: 'location',
    from: 'P-7D',
    to: 'PT-15M',
    every: 'PT15M',
    queryFrom: 'P-1D',
    variables: [
      {
        name: 'pm25',
        label: 'Variables.PM25',
        units: [
          'µg/m³'
        ],
        range: [0, 100],
        chartjs: {
          backgroundColor: 'rgba(11, 117, 169, 128)',
          borderColor: 'rgb(11, 117, 169)',
          fill: false
        }
      },
      {
        name: 'pm10',
        label: 'Variables.PM10',
        units: [
          'µg/m³'
        ],
        range: [0, 200],
        chartjs: {
          backgroundColor: 'rgba(63, 63, 191, 128)',
          borderColor: 'rgb(63, 63, 191)',
          fill: false
        }
      },
      {
        name: 'co',
        label: 'Variables.CO',
        units: [
          'ppm'
        ],
        range: [0, 10000],
        chartjs: {
          backgroundColor: 'rgba(255, 99, 132, 128)',
          borderColor: 'rgb(255, 99, 132)',
          fill: false
        }
      },
      {
        name: 'no2',
        label: 'Variables.NO2',
        units: [
          'ppm'
        ],
        range: [0, 400],
        chartjs: {
          backgroundColor: 'rgba(81, 186, 153, 128)',
          borderColor: 'rgb(81, 186, 153)',
          fill: false
        }
      },
      {
        name: 'so2',
        label: 'Variables.SO2',
        units: [
          'ppm'
        ],
        range: [0, 500],
        chartjs: {
          backgroundColor: 'rgba(40, 44, 32, 128)',
          borderColor: 'rgb(40, 44, 32)',
          fill: false
        }
      },
      {
        name: 'o3',
        label: 'Variables.O3',
        units: [
          'ppm'
        ],
        range: [0, 400],
        chartjs: {
          backgroundColor: 'rgba(83, 134, 106, 128)',
          borderColor: 'rgb(83, 134, 106)',
          fill: false
        }
      },
      {
        name: 'bc',
        label: 'Variables.BC',
        units: [
          'µg/m³'
        ],
        range: [0, 400],
        chartjs: {
          backgroundColor: 'rgba(0, 0, 0, 128)',
          borderColor: 'rgb(0, 0, 0)',
          fill: false
        }
      }
    ],
    leaflet: {
      type: 'geoJson',
      realtime: true,
      tiled: true,
      minZoom: 10,
      cluster: { disableClusteringAtZoom: 18 },
      'marker-color': '#0B75A9',
      'icon-color': 'white',
      'icon-classes': 'fa fa-heartbeat',
      popup: {
        pick: [
          'location'
        ]
      },
      tooltip: {
        template: `<% if (properties.pm25) { %>PM2.5 = <%= properties.pm25.toFixed(2) %> µg/m³</br><% }
                   if (feature.time && feature.time.pm25) { %><%= new Date(feature.time.pm25).toLocaleString() %></br><% }
                   if (properties.pm10) { %>PM10 = <%= properties.pm10.toFixed(2) %> µg/m³</br><% }
                   if (feature.time && feature.time.pm10) { %><%= new Date(feature.time.pm10).toLocaleString() %></br><% }
                   if (properties.so2) { %>SO2 = <%= properties.so2.toFixed(2) %> ppm</br><% }
                   if (feature.time && feature.time.so2) { %><%= new Date(feature.time.so2).toLocaleString() %></br><% }
                   if (properties.no2) { %>NO2 = <%= properties.no2.toFixed(2) %> ppm</br><% }
                   if (feature.time && feature.time.no2) { %><%= new Date(feature.time.no2).toLocaleString() %></br><% }
                   if (properties.o3) { %>O3 = <%= properties.o3.toFixed(2) %> ppm</br><% }
                   if (feature.time && feature.time.o3) { %><%= new Date(feature.time.o3).toLocaleString() %></br><% }
                   if (properties.co) { %>CO = <%= properties.co.toFixed(2) %> ppm</br><% }
                   if (feature.time && feature.time.co) { %><%= new Date(feature.time.co).toLocaleString() %></br><% }
                   if (properties.bc) { %>BC = <%= properties.bc.toFixed(2) %> µg/m³</br><% }
                   if (feature.time && feature.time.bc) { %><%= new Date(feature.time.bc).toLocaleString() %></br><% } %>`
      }
    },
    cesium: {
      type: 'geoJson',
      realtime: true,
      cluster: { pixelRange: 50 },
      'marker-symbol': 'air',
      'marker-color': '#0B75A9',
      popup: {
        pick: [
          'location'
        ]
      },
      tooltip: {
        template: `<% if (properties.pm25) { %>PM2.5 = <%= properties.pm25.toFixed(2) %> µg/m³\n<% }
                   if (feature.time && feature.time.pm25) { %><%= new Date(feature.time.pm25).toLocaleString() %>\n<% }
                   if (properties.pm10) { %>PM10 = <%= properties.pm10.toFixed(2) %> µg/m³\n<% }
                   if (feature.time && feature.time.pm10) { %><%= new Date(feature.time.pm10).toLocaleString() %>\n<% }
                   if (properties.so2) { %>SO2 = <%= properties.so2.toFixed(2) %> ppm\n<% }
                   if (feature.time && feature.time.so2) { %></br><%= new Date(feature.time.so2).toLocaleString() %>\n<% }
                   if (properties.no2) { %>NO2 = <%= properties.no2.toFixed(2) %> ppm\n<% }
                   if (feature.time && feature.time.no2) { %></br><%= new Date(feature.time.no2).toLocaleString() %>\n<% }
                   if (properties.o3) { %>O3 = <%= properties.o3.toFixed(2) %> ppm\n<% }
                   if (feature.time && feature.time.o3) { %></br><%= new Date(feature.time.o3).toLocaleString() %>\n<% }
                   if (properties.co) { %>CO = <%= properties.co.toFixed(2) %> ppm\n<% }
                   if (feature.time && feature.time.co) { %></br><%= new Date(feature.time.co).toLocaleString() %>\n<% }
                   if (properties.bc) { %>BC = <%= properties.bc.toFixed(2) %> µg/m³\n<% }
                   if (feature.time && feature.time.bc) { %></br><%= new Date(feature.time.bc).toLocaleString() %>\n<% } %>`
      }
    }
  },
  {
    name: 'Téléray',
    description: 'Débit de dose gamma ambiant',
    tags: [
      'measure'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/teleray-icon.jpg',
    attribution: '',
    type: 'OverlayLayer',
    service: 'teleray-measurements',
    dbName: (process.env.DATA_DB_URL ? 'data' : undefined),
    probeService: 'teleray-sensors',
    featureId: 'irsnId',
    from: 'P-7D',
    to: 'PT-10M',
    every: 'PT10M',
    queryFrom: 'PT-1H',
    variables: [
      {
        name: 'value',
        label: 'Variables.GAMMA_DOSE_RATE',
        units: [
          'nSv/h'
        ],
        range: [0, 500],
        chartjs: {
          backgroundColor: 'rgba(11, 117, 169, 128)',
          borderColor: 'rgb(11, 117, 169)',
          fill: false
        }
      }
    ],
    leaflet: {
      type: 'geoJson',
      realtime: true,
      tiled: true,
      minZoom: 10,
      cluster: { disableClusteringAtZoom: 18 },
      'marker-color': `<% if (properties.libelle === "VA") { %>darkblue<% }
                          else if (properties.visibility === "NV") { %>orange<% }
                          else { %>dark<% } %>`,
      'icon-classes': `<% if (properties.libelle === "VA") { %>fa fa-info-circle<% }
                          else if (properties.visibility === "NV") { %>fa fa-question-circle<% }
                          else { %>fa fa-times-circle<% } %>`,
      'icon-color': '#FFF',
      template: ['marker-color', 'icon-classes'],
      popup: {
        pick: [
          'name'
        ]
      },
      tooltip: {
        template: `<% if (properties.value) { %>Dose = <%= properties.value.toFixed(2) %> nSv/h</br>
                   <%= new Date(properties.measureDateFormatted).toLocaleString() %><% } %>`
      }
    },
    cesium: {
      type: 'geoJson',
      realtime: true,
      cluster: { pixelRange: 50 },
      'marker-symbol': 'lighthouse',
      'marker-color': '#180EF1',
      popup: {
        pick: [
          'name'
        ]
      },
      tooltip: {
        template: `<% if (properties.value) { %>Dose = <%= properties.value.toFixed(2) %> nSv/h\n
                   <%= new Date(properties.measureDateFormatted).toLocaleString() %><% } %>`
      }
    }
  },
  {
    name: 'Température',
    description: 'Température moyenne à 2m archivée sur OPeNDAP/THREDDS',
    tags: [
        'weather', 'archive'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/temperature.png',
    attribution: '',
    type: 'OverlayLayer',
    variables: [
        {
            name: 'temperature',
            label: 'Variables.TEMPERATURE',
            units: [
                'degC', 'K', 'degF'
            ],
            range: [0, 50],
            chartjs: {
                backgroundColor: 'rgba(255, 215, 0, 128)',
                borderColor: 'rgb(255, 215, 0)',
                fill: false
            },
            chromajs: {
                scale: 'RdBu',
                invertScale: true,
                domain: [-5, 25]
            }
        }
    ],
    meteo_model: [
        {
            model: 'arpege-world',
            from: 'P-60D',
            to: 'PT-6H',
            dynprops: {
                url: { strTemplate: "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = runTime.format('YYYYMMDDHH0000') %>https://thredds.c3x.kalisio.fr/thredds/dodsC/mf-arpege-05/<%- folder %>/T6086_G_T_Hau_<%- file %>.grb" },
                dimensionsAsValues$time: { floatTemplate: "<% const v = forecastOffset.hours(); %><%- v %>" }
            },
            opendap: {
                variable: 'Temperature_height_above_ground',
                dimensionsAsValues: { height_above_ground: 2.0 },
                latitude: 'lat',
                longitude: 'lon',
                converter: 'kelvin2celsius'
            }
        },
        {
            model: 'arpege-europe',
            from: 'P-60D',
            to: 'PT-6H',
            dynprops: {
                url: { strTemplate: "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = runTime.format('YYYYMMDDHH0000') %>https://thredds.c3x.kalisio.fr/thredds/dodsC/mf-arpege-01/<%- folder %>/T10063_T_Hau_<%- file %>.grb" },
                dimensionsAsValues$time: { floatTemplate: "<%const v = forecastOffset.hours(); %><%- v %>" }
            },
            opendap: {
                variable: 'Temperature_height_above_ground',
                dimensionsAsValues: { height_above_ground: 2.0 },
                latitude: 'lat',
                longitude: 'lon',
                converter: 'kelvin2celsius'
            }
        }
    ],
    leaflet: {
        type: 'tiledMeshLayer',
        resolutionScale: [ 2.0, 2.0 ],
        opacity: 0.6
    }
},
{
    name: 'Précipitations',
    description: 'Accumulation sur 3h archivée sur OPeNDAP/THREDDS',
    tags: [
        'weather', 'archive'
    ],
    iconUrl: 'https://s3.eu-central-1.amazonaws.com/kalisioscope/assets/precipitations.png',
    attribution: '',
    type: 'OverlayLayer',
    variables: [
        {
            name: 'precipitations',
            label: 'Variables.PRECIPITATIONS',
            units: [
              'mm'
            ],
            range: [0, 300],
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
            model: 'arpege-world',
            from: 'P-60D',
            to: 'PT-6H',
            dynprops: {
                url: { strTemplate: "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = runTime.format('YYYYMMDDHH0000') %>https://thredds.c3x.kalisio.fr/thredds/dodsC/mf-arpege-05/<%- folder %>/T6086_G_PREC_GDE_ECH_Sol_<%- file %>.grb" },
                dimensionsAsValues$time: { floatTemplate: "<% const v = forecastOffset.hours(); %><%- v %>" }
            },
            opendap: {
                variable: 'VAR85-0-1-157_surface_Mixed_intervals_Accumulation',
                latitude: 'lat',
                longitude: 'lon'
            }
        },
        {
            model: 'arpege-europe',
            from: 'P-60D',
            to: 'PT-6H',
            dynprops: {
                url: { strTemplate: "<% const folder = runTime.format('YYYY/MM/DD/HH'); const file = runTime.format('YYYYMMDDHH0000') %>https://thredds.c3x.kalisio.fr/thredds/dodsC/mf-arpege-01/<%- folder %>/T10063_PREC_GDE_ECH_Sol_<%- file %>.grb" },
                dimensionsAsValues$time: { floatTemplate: "<%const v = forecastOffset.hours(); %><%- v %>" }
            },
            opendap: {
                variable: 'VAR85-0-1-157_surface_Mixed_intervals_Accumulation',
                latitude: 'lat',
                longitude: 'lon'
            }
        }
    ],
    leaflet: {
        type: 'tiledMeshLayer',
        resolutionScale: [ 2.0, 2.0 ],
        opacity: 0.6
    }
  }
]
