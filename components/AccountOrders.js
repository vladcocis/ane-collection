import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, address1, address2, city, county, date, email, status, payment, phone) {
  return { name, address1, address2, city, county, date, email, status, payment, phone};
}

export default function BasicTable({details}) {
  const classes = useStyles();
  console.log(details.payment)

  
const rows = [
    createData(details.client_name, details.address1, details.address2, details.city,details.county, details.date_time, details.email, details.order_status, details.payment_method, details.phone)
  ];
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address 1</TableCell>
            <TableCell align="right">Address 2</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">County</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Payment Method</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address1}</TableCell>
              <TableCell align="right">{row.address2}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.county}</TableCell>
              <TableCell align="right">{row.date_time}</TableCell>
              <TableCell align="right">{row.order_status}</TableCell>
              <TableCell align="right">{row.payment_method}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}