/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import { loadUser } from '../../actions/generalActions';

// styles table
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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const AdminClientOrder = ({ loadUser, email, password, client }) => {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  let clientInfo;
  if (client) {
    clientInfo = client.authdata.user[0];
  }

  useEffect(() => {
    loadUser(email, password);
  }, [loadUser, email, password]);

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_LOCALHOST}/api/clients/${clientInfo.id}/orders`
    )
      .then((res) => res.data.orders_client)
      .then((data) => setOrders(data));
  }, [clientInfo.id]);

  useEffect(() => {
    if (orders) {
      orders.map((order) =>
        Axios.get(
          `${process.env.REACT_APP_LOCALHOST}/api/orders/${order.id_delivery}/delivery`
        )
          .then((res) => res.data)
          .then((data) => setDeliveries(data))
      );
    }
  }, [orders]);

  return (
    <div>
      {client && orders.filter((order) => order.status === 0) ? (
        <div className="info-content">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date</StyledTableCell>
                  <StyledTableCell>N° de commande</StyledTableCell>
                  <StyledTableCell>Carte</StyledTableCell>
                  <StyledTableCell>Type</StyledTableCell>
                  <StyledTableCell>Adresse de livraison</StyledTableCell>
                  <StyledTableCell>Date d&apos;envoi</StyledTableCell>
                  <StyledTableCell>Montant</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.filter((order) => order.status === 0) &&
                  orders.map((order) => (
                    <StyledTableRow key={order.id}>
                      <StyledTableCell component="th" scope="row">
                        {order.createDate}
                      </StyledTableCell>
                      <StyledTableCell>num commande</StyledTableCell>
                      <StyledTableCell>nom de la carte</StyledTableCell>
                      <StyledTableCell>physique ou en ligne</StyledTableCell>
                      <StyledTableCell>{deliveries.address}</StyledTableCell>
                      <StyledTableCell>{order.delivery_date}</StyledTableCell>
                      <StyledTableCell>xxx€</StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <p>Vous n&apos;avez pas de commandes en cours</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    client: state.auth.user,
  };
};

export default connect(mapStateToProps, { loadUser })(AdminClientOrder);
