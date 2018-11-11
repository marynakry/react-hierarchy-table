import {filterData} from '../helpers'
import {DELETE_ROW, FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED} from "../constants"

export default (dataState = [], action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ROW:
            return filterData(dataState, payload.id)
        case FETCH_DATA_FULFILLED:
            return payload
        case FETCH_DATA_REJECTED:
            return []
    }

    return dataState
}