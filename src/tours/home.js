module.exports = [{
  target: '#opener-left',
  title: 'tours.home.SIDENAV_LABEL',
  link: 'tours.home.SIDENAV_LINK_LABEL',
  params: {
    placement: 'right',
    clickOnLink: '#opener-left',
    tour: 'map/side-nav'
  }
}, {
  target: '#opener-top',
  title: 'tours.home.NAVIGATION_BAR_LABEL',
  link: 'tours.home.NAVIGATION_BAR_LINK_LABEL',
  params: {
    placement: 'bottom',
    tour: 'map/navigation-bar'
  }
}, {
  target: '#opener-right',
  title: 'tours.home.CATALOG_LABEL',
  link: 'tours.home.CATALOG_LINK_LABEL',
  params: {
    placement: 'left',
    clickOnLink: '#opener-right',
    tour: 'map/catalog-panel'
  }
}, {
  target: '#opener-bottom',
  title: 'tours.home.TIMELINE_LABEL',
  link: 'tours.home.TIMELINE_LINK_LABEL',
  params: {
    placement: 'top',
    clickOnLink: '#opener-bottom',
    tour: 'map/timeline'
  }
}]
