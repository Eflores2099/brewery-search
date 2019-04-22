import React from 'react'
import {withBrews} from '../Context/BrewsProvider'


const MappedBrews = (props) => {
    console.log(props)
        const cityBrews = props.cityBrewsArr.map(brewery => 
        <div>
            {brewery.name}
        </div>)
        
        
    return (
        <div className = "mapped-brews">
            {cityBrews}
        </div>
    )
}

export default withBrews(MappedBrews)