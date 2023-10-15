'use client'
import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import json from '@/sample/sample_A.json'
import { useState, useEffect } from 'react'

type dataType = {
  align: string
  displayName: string
  rowSpan: number
  colSpan: number
}

function App() {
  const [columns, setColumns] = useState<dataType[]>([])
  const [rows, setRows] = useState<dataType[][]>([])
  useEffect(() => {
    fetch('http://localhost:3001/header', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setColumns(data)
      })
  }, [])
  useEffect(() => {
    fetch('http://localhost:3001/body', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setRows(data)
      })
  }, [])

  return (
    <div className="p-10">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((list) => (
                <TableCell align={list.align}>{list.displayName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                {row.map((cell) => (
                  <TableCell align={cell.align}>{cell.displayName}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default App
