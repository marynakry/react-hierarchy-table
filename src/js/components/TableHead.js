import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TableHead extends Component {

    static propTypes = {
        titles: PropTypes.arrayOf(
            PropTypes.string
        )
    }

    render() {
        const {titles} = this.props
        const headerColumns = titles.map(title => <th key={title}>{title}</th>)
        return (
            <tr>
                <th></th>
                {headerColumns}
                <th></th>
                </tr>
        )
    }
}

export default TableHead
