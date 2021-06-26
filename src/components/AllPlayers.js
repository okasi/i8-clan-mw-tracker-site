import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core'
import { default as allStats } from '../data/allStats.json'
import createRows from '../utils/createRows'

export default function AllPlayers () {
  const columns = [
    { id: 'name', label: 'Name', minWidth: 200 },
    { id: 'kdRatio', label: 'K/D Ratio', minWidth: 80 },
    { id: 'kills', label: 'Kills', minWidth: 80 },
    { id: 'deaths', label: 'Deaths', minWidth: 80 },
    { id: 'downs', label: 'Downs', minWidth: 80 },
    { id: 'averageLife', label: 'Average Life', minWidth: 80 },
    { id: 'wlRatio', label: 'W/L Ratio', minWidth: 80 },
    { id: 'wins', label: 'Wins', minWidth: 80 },
    { id: 'top5', label: 'Top 5', minWidth: 80 },
    { id: 'top10', label: 'Top 10', minWidth: 80 },
    { id: 'contracts', label: 'Contracts', minWidth: 80 },
    { id: 'scorePerMinute', label: 'Score Per Minute', minWidth: 80 },
    { id: 'scorePerGame', label: 'Score Per Game', minWidth: 80 },
    { id: 'score', label: 'Score', minWidth: 80 },
    { id: 'timePlayed', label: 'Time Played', minWidth: 80 },
    { id: 'gamesPlayed', label: 'Games Played', minWidth: 80 }
  ]

  const rows = createRows(allStats.players, columns)

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = row[column.id]
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
