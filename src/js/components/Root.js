import React, {Component} from 'react'
import App from './App'
import store from '../store/index'
import {Provider} from 'react-redux'

class Root extends Component {

    render() {
        return (
            <Provider store = {store}>
                <App/>
            </Provider>
        )
    }
}

export default Root
