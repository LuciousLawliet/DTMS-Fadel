import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useMataUang } from "../../graphql/services/MataUang.js";
import TambahMataUang from "../../content/master/tambahmatauang.js";
import UbahMataUang from "../../content/master/ubahmatauang.js";
  
  const MataUangTable = () => {
    const columns = [
      { id: "mata", headerName: "Mata Uang", align: "center" },
      { id: "nama", headerName: "Nama Mata Uang" },
      { id: "beli", headerName: "Kurs Beli" },
      { id: "jual", headerName: "Kurs Jual" },
      { id: "tengah", headerName: "Kurs Tengah" },
      { id: "simbol", headerName: "Simbol" },
      { id: "tanggal", headerName: "Tanggal Efektif" },
      { id: "aksi", headerName: "Aksi" },
    ];
  
    const { data, loading, error } = useMataUang();
    const [page, setPage] = useState(0);
    const [rowPage, setRowPage] = useState(5);
  
    if (loading) return "Loading";
    if (error) return `Submission error! ${error.message}`;
  
    const rows = data.getMataUang;
    const labelRowsPerPage = "Baris per halaman:";
    const labelDisplayedRows = ({ from, to, count }) => {
      return `${from}-${to} dari ${count !== -1 ? count : `lebih dari ${to}`}`
    }
  
    const handleChangePage = (event, newpage) => {
      setPage(newpage);
    };
  
    const handleRowsPerPage = (event) => {
      setRowPage(+event.target.value);
      setPage(0);
    };
    console.log('mata uang', rows)
  
    return (
      <Paper>
        <TableContainer sx={{ width: '100%', maxHeight: 380, borderRadius: '5px' }}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{
                      fontSize: 15,
                      textAlign: "center",
                      fontWeight: 700,
                      backgroundColor: "#AFD3E2",
                      borderRight: "2px solid rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    {column.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowPage, page * rowPage + rowPage).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "td, th": { borderRight: "2px solid rgba(0, 0, 0, 0.12)" },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{ width: "10%" }}
                  >
                    {row.mata}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "20%" }}>
                    {row.nama}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "11.66%" }}>
                    {row.beli}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "11.66%" }}>
                    {row.jual}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "11.66%" }}>
                    {row.tengah}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "5%" }}>
                    {row.simbol}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "20%" }}>
                    {row.tanggal}
                  </TableCell>
                  <TableCell align="center" sx={{ width: "10%" }}>
                    <UbahMataUang rows={rows} row={row}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          page={page}
          count={rows.length}
          rowsPerPage={rowPage}
          component="div"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowsPerPage}
          labelDisplayedRows={labelDisplayedRows}
          labelRowsPerPage={labelRowsPerPage}
          sx={{
            fontSize: 15,
            fontWeight: 500,
          }}
        ></TablePagination>
      </Paper>
    );
  };
  
  export default MataUangTable;
  