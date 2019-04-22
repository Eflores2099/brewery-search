import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import BrewsProvider from './Context/BrewsProvider.js'


ReactDOM.render(
<BrewsProvider>    
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
</BrewsProvider>,
document.getElementById('root'))