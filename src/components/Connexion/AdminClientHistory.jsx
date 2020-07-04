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

const AdminClientHistory = ({ loadUser, email, password, client }) => {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [products, setProducts] = useState([]);

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
    const delivery = [];
    if (orders) {
      orders.map((order) =>
        Axios.get(
          `${process.env.REACT_APP_LOCALHOST}/api/orders/${order.id_delivery}/delivery`
        )
          .then((res) => delivery.push(res.data))
          .then(() => setDeliveries(delivery))
      );
    }
  }, [orders]);

  useEffect(() => {
    const product = [];
    if (deliveries.length > 0) {
      orders.map((order) =>
        Axios.get(
          `${process.env.REACT_APP_LOCALHOST}/api/clients/${clientInfo.id}/orders/${order.id}/products`
        )
          .then((res) => product.push(res.data.products_order_client))
          .then(() => setProducts(product))
      );
    }
  }, [clientInfo.id, orders, deliveries.length]);

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
                {orders.filter(
                  (order) =>
                    order.status === 1 &&
                    deliveries.map((delivery) =>
                      products.map((product) =>
                        product.map((prod) => (
                          <StyledTableRow key={delivery.id}>
                            <StyledTableCell component="th" scope="row">
                              {new Date(order.createDate).toLocaleDateString()}
                            </StyledTableCell>
                            <StyledTableCell>
                              {prod.commande_nb}
                            </StyledTableCell>
                            <StyledTableCell>{prod.name}</StyledTableCell>
                            {prod.realCard === 0 ? (
                              <>
                                <StyledTableCell>E-card</StyledTableCell>
                                <StyledTableCell>
                                  {delivery.mail}
                                </StyledTableCell>
                              </>
                            ) : (
                              <>
                                <StyledTableCell>Physique</StyledTableCell>
                                <StyledTableCell>
                                  {delivery.address}, {delivery.zipcode}{' '}
                                  {delivery.city}, {delivery.country}
                                </StyledTableCell>
                              </>
                            )}
                            <StyledTableCell>
                              {new Date(
                                order.delivery_date
                              ).toLocaleDateString()}
                            </StyledTableCell>
                            <StyledTableCell>{prod.credit}€</StyledTableCell>
                          </StyledTableRow>
                        ))
                      )
                    )
                )}
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
