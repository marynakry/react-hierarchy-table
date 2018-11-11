import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import TableHead from './TableHead'
import TableRow from './TableRow'

class Table extends Component {

    static propTypes = {
       dataRows: PropTypes.arrayOf(PropTypes.shape({
           data: PropTypes.object,
           kids: PropTypes.object
       }))
    }


    render() {
        return (
            <div className='table-responsive'>
                <table className='table table-bordered table-striped'>
                    <thead className='thead-light'>
                        <TableHead titles = {this.getTitles()}/>
                    </thead>
                    <tbody>
                        {this.getTableRows()}
                    </tbody>
                </table>
            </div>
        );
    }

    getTitles() {
        const {dataRows} = this.props
        return Object.keys(dataRows[0].data)
    }

    getTableRows() {
        const {dataRows} = this.props
        const rows = dataRows.map(row => <Fragment key={Object.values(row.data)[0]}><TableRow rowData = {row}/></Fragment>)
        return rows
    }
}

export default Table
