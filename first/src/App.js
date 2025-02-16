import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from "./components/About"
// import Skill from './components/Skill'
import skills1 from './components/skills1'
import Projects from './components/Projects'
import Header from './components/Header'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  
  <BrowserRouter>
  <Header/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path='/about' component={About}/>
    {/* <Route exact path='/skill' component={Skill}/> */}
    <Route exact path ="/skill" component={skills1}/>
    <Route exact path='/projects' component={Projects}/>
    <Route exact path='/contact' component={Contact}/>
    <Route  component={NotFound}/>
  </Switch>
    
  </BrowserRouter>
)

export default App

