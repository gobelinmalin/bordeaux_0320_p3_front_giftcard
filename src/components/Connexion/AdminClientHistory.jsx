/* eslint-disable no-plusplus */
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
    backgroundColor: '#231864',
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

const AdminClientHistory = ({ loadUser, client }) => {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    loadUser(localStorage.getItem('token'));
  }, [loadUser]);

  let clientInfo;
  if (client) {
    clientInfo = client.authdata.user[0];
  }

  // accèder aux commandes liées au client
  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_LOCALHOST}/api/clients/${clientInfo.id}/orders`
    )
      .then((res) => res.data.orders_client)
      .then((data) => setOrders(data));
  }, [clientInfo.id]);

  const delivery = [];
  // accèder à toutes les données de chaque commande
  useEffect(() => {
    if (orders) {
      orders.map((order) =>
        Axios.get(
          `${process.env.REACT_APP_LOCALHOST}/api/clients/${clientInfo.id}/orders/${order.id}/deliveries/products`
        )
          .then((res) => res.data[0])
          .then((data) => delivery.push(data) && setDeliveries(delivery))
      );
    }
  }, [orders, clientInfo.id, delivery]);

  return (
    <div>
      {orders.filter((order) => order.status === 0) ? (
        <p>Vous n&apos;avez pas de commandes passées</p>
      ) : (
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
                {deliveries.map((info) => (
                  <StyledTableRow key={info.id}>
                    <StyledTableCell component="th" scope="row">
                      {new Date(info.createDate).toLocaleDateString()}
                    </StyledTableCell>
                    <StyledTableCell>{info.id}</StyledTableCell>
                    <StyledTableCell>{info.name}</StyledTableCell>
                    {info.realCard === 0 ? (
                      <>
                        <StyledTableCell>E-card</StyledTableCell>
                        <StyledTableCell>{info.mail}</StyledTableCell>
                      </>
                    ) : (
                      <>
                        <StyledTableCell>Physique</StyledTableCell>
                        <StyledTableCell>
                          {info.address}, {info.zipcode} {info.city},{' '}
                          {info.country}
                        </StyledTableCell>
                      </>
                    )}
                    <StyledTableCell>
                      {new Date(info.delivery_date).toLocaleDateString()}
                    </StyledTableCell>
                    <StyledTableCell>{info.credit}€</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    client: state.auth.user,
  };
};

export default connect(mapStateToProps, { loadUser })(AdminClientHistory);
