import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import Projects from './components/Projects'

import Contacts from './components/Contacts'

import Skills from './components/Skills'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contacts" component={Contacts} />
    <Route exact path="/skills" component={Skills} />
  </Switch>
)

export default App
