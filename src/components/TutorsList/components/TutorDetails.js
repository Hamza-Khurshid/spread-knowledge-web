import React from "react";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  typright: {
    marginTop: 50
  },
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    width: "100%"
  }
}));


export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          <TableRow key={1}>
            <TableCell align="left">
              <b>Subjects</b>
            </TableCell>
            <TableCell align="left">Computer Science, Physics, Computer Science</TableCell>
          </TableRow>
          <TableRow key={2}>
            <TableCell>
              <b>Degree to Taught</b>
            </TableCell>
            <TableCell align="left">F.Sc (Pre Engineering), 2014-2018</TableCell>
          </TableRow>
          <TableRow key={3}>
            <TableCell>
              <b>Experience</b>
            </TableCell>
            <TableCell align="left">F.Sc (Pre Engineering), 2014-2018</TableCell>
          </TableRow>
          <TableRow key={4}>
            <TableCell>
              <b>Contact</b>
            </TableCell>
            <TableCell align="left">0306-4286860, ahmar01@gmail.com</TableCell>
          </TableRow>
          <TableRow key={5}>
            <TableCell>
              <b>Fee Range</b>
            </TableCell>
            <TableCell align="left">Rs. 7,500-10,000</TableCell>
          </TableRow>
          <TableRow key={6}>
          <TableCell>
              <b>Gender</b>
            </TableCell>
            <TableCell align="left">Male</TableCell>
          </TableRow>
          <TableRow key={7}>
          <TableCell>
              <b>Address</b>
            </TableCell>
            <TableCell align="left">Qila Noor Pur, Nankana Sahib</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
