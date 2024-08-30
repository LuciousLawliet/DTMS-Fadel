import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import UbahHakAkses from "../../content/master/ubahhakakses.js";
import { useHakAkses } from "../../graphql/services/HakAkses.js";

const HakAksesTable = () => {
  const columns = [
    { id: "kode", headerName: "Kode Hak Akses", align: "center" },
    { id: "akses", headerName: "Nama Hak Akses" },
    { id: "status", headerName: "Status" },
    { id: "aksi", headerName: "Aksi" },
  ];

  const { data, loading, error } = useHakAkses();
  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;

  const rows = data.getHakAksesByKode;

  return (
    <Paper>
      <TableContainer>
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
            {rows.map((row) => (
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
                  <UbahHakAkses row={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default HakAksesTable;
