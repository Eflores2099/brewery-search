import React, { Component} from 'react'
import NavBar from './Components/NavBar.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import { Switch, Route, withRouter } from 'react-router-dom'
import './style.css'
import { withBrews } from './Context/BrewsProvider.js'
import ResultPage from "./Components/ResultPage"
import MappedBrews from "./Components/MappedBrews.js"



class App extends Component {
    constructor (){
        super()
      
        
      
    }

    componentDidMount() {
        // this.props.getBrews()
    }


    render () {
        // console.log(this.props)
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path = "/" component = {Home}/>
                    <Route path = "/about" component = {About}/>
                    <Route path = "/ResultPage" component= {ResultPage}/>
                    <Route path = "/MappedBrews" component = {MappedBrews}/>
                </Switch>
            </div>
            )
        }  
    
}


export default withBrews(withRouter(App))