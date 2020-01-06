import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/About" component={About} />
        <Route exact path="/ContactUs" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
