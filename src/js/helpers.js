export function filterData(data, id) {
    const newData = []
    for (let row of data) {
        const newRow = filterRow(row, id)
        if (newRow) {
            newData.push(newRow)
        }
    }
   return newData
}

function filterRow(row, id) {
    if (Object.values(row.data)[0] === id) {
        return null
    } else {
        if (Object.keys(row.kids).length) {
            const kids = Object.values(row.kids)[0].records
            let newKids = []
            for (let kid of kids) {
                let newKid = filterRow(kid, id)
                if (newKid) {
                    newKids.push(newKid)
                }
            }
            if (!newKids.length) {
                row.kids = {}
            } else {
                Object.values(row.kids)[0].records = newKids
            }
        }
    }
    return row
}