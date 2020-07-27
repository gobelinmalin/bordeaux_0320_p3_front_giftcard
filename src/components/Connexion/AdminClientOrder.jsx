/* eslint-disable no-unused-vars */
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

const AdminClientOrder = ({ loadUser, client }) => {
  const classes = useStyles();

  const [orders, setOrders] = useState([]);
  const [infos, setInfos] = useState([]);

  let clientInfo;
  if (client) {
    clientInfo = client.authdata.user[0];
  }

  // charger les données liées au client
  useEffect(() => {
    loadUser(localStorage.getItem('token'));
  }, [loadUser]);

  // accèder aux commandes liées au client
  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_LOCALHOST}/api/clients/${clientInfo.id}/orders`
    )
      .then((res) => res.data.orders_client)
      .then((data) => setOrders(data));
  }, [clientInfo.id]);

  const allinfos = [];
  // accèder à toutes les données de chaque commande
  useEffect(() => {
    orders.map(
      (order) =>
        Axios.get(
          `${process.env.REACT_APP_LOCALHOST}/api/clients/${clientInfo.id}/orders/${order.id}/deliveries/products`
        )
          .then((res) => res.data[0])
          .then((data) => allinfos.push(data))
      // .then(() => console.log(allinfos))
    );
  }, [clientInfo.id, orders, allinfos]);

  return (
    <div>
      {infos.length > 0 && infos.filter((info) => info.status === 0) ? (
        <div className="info-content">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Date de commande</StyledTableCell>
                  <StyledTableCell>N° de commande</StyledTableCell>
                  <StyledTableCell>Carte</StyledTableCell>
                  <StyledTableCell>Type</StyledTableCell>
                  <StyledTableCell>Adresse de livraison</StyledTableCell>
                  <StyledTableCell>Date d&apos;envoi</StyledTableCell>
                  <StyledTableCell>Montant</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {infos.map((info) => (
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
