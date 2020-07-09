import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = (props) => {
  const { image, title, description, credit, removeFromCart } = props;
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#231864',
      border: 0,
      borderRadius: 10,
      color: '#fff2ceff',
      height: '2rem',
      padding: '1rem',
      fontWeight: '500',
      fontFamily: 'Montserrat',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
        backgroundColor: '#231864',
      },
    },
  });

  const classes = useStyles();
  return (
    <div className="CartItem">
      <div className="FirstPart">
        <div className="NameAndPrice">
          <h3>{title}</h3>
          <div className="CartItemValue">{credit}€</div>
        </div>
        <div className="ImageAndDescription">
          <img src={image} alt={title} />
          <div className="Description">{description}</div>
        </div>
      </div>

      <Button
        onClick={removeFromCart}
        variant="contained"
        color="primary"
        className={classes.root}
        href="#"
      >
        X
      </Button>
    </div>
  );
};
CartItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  credit: PropTypes.number,
  removeFromCart: PropTypes.func,
};

CartItem.defaultProps = {
  image: '',
  title: '',
  description: '',
  credit: '',
  removeFromCart: '',
};

export default CartItem;
