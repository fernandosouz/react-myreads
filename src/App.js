import React from 'react'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'
import { Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import './App.css'


library.add(faStroopwafel)



class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path='/' component={HomePage}/>

                <Route exact path='/search' component={SearchPage}/>
            </div>
        )
    }
}

export default BooksApp
