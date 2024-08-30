import * as React from "react";
import Collapse from "@mui/material/Collapse";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Grid, Typography } from "@mui/material";
import { useGetMenuItem } from "../graphql/services/Menu";

export default function MenuItem() {
  const [open, setOpen] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const { data, loading, error } = useGetMenuItem();

  if (loading) return "Loading";
  if (error) return `Submission error! ${error.message}`;
  const rows = data.getMenuItem;

  return (
    <Grid
      container
      direction="row"
      paddingLeft="25px"
    >
      <Grid item xs={1} onClick={() => setOpen(!open)}>
        <ArrowRightIcon
          sx={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </Grid>
      <Grid item xs={11} onClick={() => setOpen(!open)}>
        <Typography fontWeight={700}>MASTER</Typography>
      </Grid>
      <Collapse in={open}>
        {rows.map((row) => {
          return (
            <>
              <Grid container direction="row" paddingLeft="25px" key={row.nama}>
                <Grid xs={1} onClick={() => setIsOpen(!isOpen)}>
                  <ArrowRightIcon
                    sx={{
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </Grid>
                <Grid xs={11} paddingLeft="15px">
                  <Typography>{row.nama}</Typography>
                </Grid>
              </Grid>
            </>
          );
        })}
      </Collapse>
    </Grid>
  );
}
