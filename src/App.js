import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Contact } from "./pages/contact/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Create } from "./components/create/Create"
import { Videos } from "./pages/videos/Videos"
import { AboutUs } from "./pages/about/aboutUs"


//import {PhishingActivity} from "./pages/activities/PhishingActivity/PhishingActivity"
import { ActivitiesPage } from "./pages/activities/activities"
//import facebookLogo from './pages/activities/PhishingActivity/facebook_logo.png';




const App = () => {
  return (
    
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={DetailsPages} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/videos' component={Videos} />
          <Route exact path='/activites' component={ActivitiesPage} />
          <Route exact path='/about' component={AboutUs} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App

