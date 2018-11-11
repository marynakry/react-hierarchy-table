import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import RowContent from './RowContent'
import {connect} from 'react-redux'
import {deleteRow} from "../actions/index"

@connect((store) => {
    return {
        data: store.tableData
    }
}, { deleteRow })

class TableRow extends Component {

    static propTypes = {
        rowData: PropTypes.shape({
            data: PropTypes.object,
            kids: PropTypes.object
        }),
        deleteRow: PropTypes.func
    }

    state = {
        isOpen: false,
        arrowClass: "fas fa-caret-right"
    }

    render() {
        const {rowData} = this.props
        const columns = Object.values(rowData.data).map(val => <td>{val}</td>)
        
        return (
            <Fragment>
                <tr onClick={this.toggleRow} className={this.hasKids() ? 'collapsed' : ''}>
                    <td className='arrow'>
                        {this.hasKids() ? <i className={this.state.arrowClass}></i> : ''}
                    </td>
                    {columns}
                    <td className='delete'>
                        <a onClick={this.handleDelete} title='Delete' className='delete-btn'>
                            <i className="fas fa-times"></i>
                        </a>
                    </td>
                </tr>
                {this.getRowContent()}
            </Fragment>
        )
    }

    changeArrowClass() {
        let className = 'fas '
        if (this.state.arrowClass.includes('fa-caret-right')) {
            className += 'fa-caret-down'
        } else {
            className += 'fa-caret-right'
        }
        this.setState({
            arrowClass: className
        })
    }

    toggleRow = (e) => {
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
        this.changeArrowClass()
    }

    getRowContent() {
        const {rowData} = this.props
        if (this.state.isOpen) {
            if (this.hasKids()) {
                return (
                    <tr className='nested'>
                        <td colSpan='100'>
                            <RowContent kidsData={rowData.kids}/>
                        </td>
                    </tr>
                )
            }
        }
    }

    hasKids() {
        const {rowData} = this.props
        return !!Object.keys(rowData.kids).length
    }

    handleDelete = () => {
        const {deleteRow, rowData} = this.props
        deleteRow(Object.values(rowData.data)[0])
    }
}

export default TableRow
