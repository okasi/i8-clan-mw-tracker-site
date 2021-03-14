
export default function createRows(players, columns) {
  const rows = players.map((player) => {
    let row = {}
    columns.map((column) => {
      if (column.id === 'name') {
        return (row[column.id] = player[column.id])
      }
      return (row[column.id] = player[column.id].displayValue)
    })
    return row
  })
  return rows
}
