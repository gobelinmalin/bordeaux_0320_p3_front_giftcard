import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = (props) => {
  const {
    image,
    title,
    description,
    credit,
    message,
    removeFromCart,
    id,
  } = props;

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
        {message.length > 0 ? (
          <div className="cart-msg">
            <h4>Votre message</h4>
            <p>{message}</p>
          </div>
        ) : (
          <h4>Sans message</h4>
        )}
      </div>

      <Button
        onClick={() => removeFromCart(id)}
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
  message: PropTypes.string,
  removeFromCart: PropTypes.func,
  id: PropTypes.number,
};

CartItem.defaultProps = {
  image: '',
  title: '',
  description: '',
  credit: Number,
  removeFromCart: () => {},
  message: '',
  id: '',
};

export default CartItem;
