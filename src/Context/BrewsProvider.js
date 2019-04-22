import React, { Component } from 'react'
import axios from 'axios'

const BrewsContext = React.createContext()

class BrewsProvider extends Component {
    constructor() {
        super()
        this.state = {
            breweriesArr: [{name: "", city: "", state: "", website_url: ""}],
            cityBrewsArr: [{}]
            
        }
        this.url = "https://api.openbrewerydb.org/breweries"
    }


    getBrews = (userInput) => {
        console.log('get brews func hit')
        axios.get(`https://api.openbrewerydb.org/breweries?by_name=${userInput}`).then(response => { 
            console.log(response)
            this.setState({

                breweriesArr: response.data.length ? response.data : [{name: "", city: "", state: "", website_url: ""}]
            })
        })
    }

    getCityBrews = (userInput) => {
        console.log('get brews func hit')
        axios.get(`https://api.openbrewerydb.org/breweries?by_city=${userInput}`).then(response => { 
            console.log(response)
            this.setState({

                cityBrewsArr: response.data.length ? response.data : [{name: "", website_url: ""}]
            })
        })
    }



  

    render(){
        return(
            <BrewsContext.Provider value = {{getBrews: 
                this.getBrews, breweriesArr: 
                this.state.breweriesArr, getCityBrews: 
                this.getCityBrews,cityBrewsArr: 
                this.state.cityBrewsArr}}>
                {this.props.children} 
            </BrewsContext.Provider>

           
        )
    }
}

export const withBrews = C => props => (
    <BrewsContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BrewsContext.Consumer>
)
export default BrewsProvider