import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Table from './Table'

class RowContent extends Component {

    static propTypes = {
        kidsData: PropTypes.object
    }

    render() {
        const {kidsData} = this.props
        const title = Object.keys(kidsData)[0]
        const dataRows = kidsData[title].records
        return (
            <div className='rowContent'>
               <p><strong>{title}</strong></p>
               <Table dataRows={dataRows}/>
            </div>
        )
    }
}

export default RowContent
