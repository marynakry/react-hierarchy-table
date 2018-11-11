import {DELETE_ROW, FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED} from "../constants"

export function deleteRow(id) {
    return {
        type: DELETE_ROW,
        payload: { id }
    }
}

function loadData(json) {
    return {
        type: FETCH_DATA_FULFILLED,
        payload: json
    }
}

function loadError(error) {
    return {
        type: FETCH_DATA_REJECTED,
        payload: error
    }
}

export function fetchData() {
    return dispatch => {
        fetch('src/js/data-1.json')
            .then(response => response.json())
            .then(json => {
                dispatch(loadData(json))
            })
            .catch((error) => {
                dispatch(loadError(error))
            })
    }
}
