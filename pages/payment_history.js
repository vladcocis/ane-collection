import React, {useState, useEffect} from "react";
import useUser from "../lib/useUser";
import axios from "axios";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 700,
    },
    root: {
        marginTop: theme.spacing(8),
        height: 800,
        margin: '35em',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
      },
  }));

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const edit_account =() =>{
    const classes = useStyles();

    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState (false);

    
    const { user} = useUser({ redirectTo: "/account" });
    
    useEffect(() => {
        if (!user) {
            return <h1>Loading</h1>
          }
          const id = user.id
        async function fetchAccountPayments() {
            const response = await axios.get(`/api/payments/${id}`);
      
            if (response.status === 200) {
              setData(response.data.payload);
              setIsLoading(true)
              //console.log(response.data.payload)
            }
          }
          fetchAccountPayments()
      },[user]);

      const displayAccountPayments = () => {
          return <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Transaction Date</StyledTableCell>
                <StyledTableCell align="right">Total Amount</StyledTableCell>
                <StyledTableCell align="right">Payment Method</StyledTableCell>
                <StyledTableCell align="right">Invoice</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {data.map((details) => (
                <StyledTableRow key={details.id}>
                  <TableCell component="th" scope="row">
                  {details.transaction_date}
                  </TableCell>
                  <TableCell align="right">{details.payment_total}</TableCell>
                  <TableCell align="right">{details.payment_method}</TableCell>
                  <TableCell align="right">{details.invoice}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }

    return(
        <React.Fragment>
            <div className={classes.root}>
            <h1 > You can see your payment history here</h1>
            {isLoading ? displayAccountPayments() : <p></p>}
            
            </div>
    </React.Fragment>
    )
}

export default edit_account;