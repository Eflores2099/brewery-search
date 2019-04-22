import React, {Component} from 'react'
// import ResultPage from './ResultPage.js'
import {withBrews} from '../Context/BrewsProvider'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            cityInput: ""
        }

    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    handleSubmit = (e) => {
        
        e.preventDefault()
        this.props.getBrews(this.state.userInput)
         this.props.history.push('/ResultPage') 
        
        
}

    handleCitySubmit = (e) => {
        e.preventDefault()
        this.props.getCityBrews(this.state.cityInput)
        this.props.history.push('/MappedBrews')
}


    render() {
        return (
                    
                <div className = "form">
                
                    <form onSubmit ={this.handleSubmit}>
                        <input className = "user-input" 
                            type = "text" 
                            name = "userInput"  
                            value = {this.state.userInput} 
                            onChange = {this.handleChange} 
                            placeholder = "Name of Brewery"/>
                    <button className = "button">Submit</button>  
                         
                    </form>


                    <form onSubmit = {this.handleCitySubmit}>
                        <input className = "city-input" type = "text" 
                            name = "cityInput"  
                            value = {this.state.cityInput} 
                            onChange = {this.handleChange} 
                            placeholder = "Name of City"/>
                    <button className = "button2">Submit</button>

                    </form>
                 
                </div>
        
        )
    }
}

export default withBrews(Home)