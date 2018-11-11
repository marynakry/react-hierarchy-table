import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Table from './Table'
import {connect} from 'react-redux'
import { fetchData } from '../actions/index'

@connect((store) => {
    return {
        data: store.tableData
    }
}, {fetchData})

class App extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            data: PropTypes.object,
            kids: PropTypes.object
        })),
        fetchData: PropTypes.func
    };

    componentWillMount() {
        this.props.fetchData()
    }

    render() {
        const {data} = this.props
        let content
        if (data === null) {
            content = <p>Loading...</p>
        } else if (data.length){
           content = <Table dataRows={data}/>
        } else {
            content = <p>No data to display</p>
        }
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default (App)
