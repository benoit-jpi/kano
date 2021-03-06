// Page models
import * as pages from '../test/page-models'

fixture`3Dfixture`// declare the fixture
  .page`${pages.getUrl()}`  // specify the start page
  // test.before/test.after overrides fixture.beforeEach/fixture.afterEach hook,
  // so implement one in your test if you'd like another behaviour
  .beforeEach(async test => {
    // mock geolocation
    await pages.mockLocationAPI()
  })
  .afterEach(async test => {
    // check for console error messages
    await pages.checkNoClientError(test)
  })

const app = new pages.ApplicationLayout()
const auth = new pages.Authentication()
const select = new pages.Selectdata()
const panelGlobe = new pages.LayerPanelGlobe()
const sidenav = new pages.Sidenav()
const mapView = new pages.MapView()

test('Login, and features', async test => {
  await auth.logIn(test, { email: 'kalisio@kalisio.xyz', password: 'Pass;word1' })
  

 // await test.navigateTo("http://localhost:8080/#/home/map?south=39.07890809706475&west=-17.490234375000004&north=53.64463782485651&east=24.697265625000004")

  await test.setTestSpeed(0.1)

  await sidenav.select3D(test)

  
  await panelGlobe.openRightPanel(test)
  //await select.changeBusiness(test)
  //await select.filldata(test)
  //await select.deleteData(test)
  
  await panelGlobe.closeRightPanel(test)
  await mapView.movemap(test, 800, 0)


  await auth.logOut(test)
})
