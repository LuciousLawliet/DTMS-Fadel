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
import React, { useState } from "react";
import UbahHakAkses from "../../contents/master/ubahhakakses.js";

const HakAksesTable = ({ rows }) => {
  const columns = [
    { id: "kode", headerName: "Kode Hak Akses", align: "center" },
    { id: "akses", headerName: "Nama Hak Akses" },
    { id: "status", headerName: "Status" },
    { id: "aksi", headerName: "Aksi" },
  ];
  const [page, setPage] = useState(0);
  const [rowPage, setRowPage] = useState(5);
  const labelRowsPerPage = "Baris per halaman:";

  const labelDisplayedRows = ({ from, to, count }) => {
    return `${from}-${to} dari ${count !== -1 ? count : `lebih dari ${to}`}`;
  };

  const handleChangePage = (event, newpage) => {
    setPage(newpage);
  };

  const handleRowsPerPage = (event) => {
    setRowPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer
        sx={{ width: "100%", maxHeight: 380, borderRadius: "5px" }}
      >
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
                  sx={{ width: "20%" }}
                >
                  {row.kode}
                </TableCell>
                <TableCell align="center" sx={{ width: "60%" }}>
                  {row.nama}
                </TableCell>
                <TableCell align="center" sx={{ width: "10%" }}>
                  {row.status}
                </TableCell>
                <TableCell align="center" sx={{ width: "10%" }}>
                  <UbahHakAkses rows={rows} row={row} />
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

export default HakAksesTable;
