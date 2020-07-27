import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../GiftCardPage/FilterCardContainer.css';
import axios from 'axios';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as actionCreators from '../../actions/index';

const options = [
  { value: 'Bordeaux', label: 'Bordeaux' },
  { value: 'Marseille', label: 'Marseille' },
  { value: 'Lyon', label: 'Lyon' },
  { value: 'Paris', label: 'Paris' },
  { value: 'Toulouse', label: 'Toulouse' },
  { value: 'Nantes', label: 'Nantes' },
  { value: 'Rennes', label: 'Rennes' },
  { value: 'Brest', label: 'Brest' },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
  }),
  control: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
  }),
};

const FilterShopContainer = (props) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#20124d',
      border: 0,
      borderRadius: 10,
      color: '#fff2ceff',
      height: '2.5rem',
      marginLeft: '-65px',
      marginTop: '50px',
      padding: '1.5rem',
      fontWeight: '500',
      fontFamily: 'Montserrat',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
        backgroundColor: '#20124d',
      },
    },
  });

  const classes = useStyles();
  const {
    filterShopType,
    filterRecipient,
    filterTheme,
    finalShopFilter,
    filterShopByType,
    filterShopByTheme,
    filterShopByRecipient,
  } = props;

  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (city) => {
    setSelectedCity(city);
  };

  // filter themes
  const onClickTheme = (theme) => {
    axios
      // .get(`${process.env.REACT_APP_LOCALHOST}/api/shops?theme=${theme}`)
      .get(`http://localhost:5000/api/shops?theme=${theme}`)
      .then((res) => filterShopByTheme(theme, res.data));
  };

  const onClickRecipient = (recipient) => {
    axios
      // .get(`${process.env.REACT_APP_LOCALHOST}/api/shops?tag=${recipient}`)
      .get(`http://localhost:5000/api/shops?tag=${recipient}`)
      .then((res) => filterShopByRecipient(recipient, res.data));
  };

  const onClickType = (type) => {
    axios
      // .get(`${process.env.REACT_APP_LOCALHOST}/api/shops/${type}`)
      .get(`http://localhost:5000/api/shops/${type}`)
      .then((res) => filterShopByType(type, res.data));
  };

  const filter = () => {
    axios
      // .get(`${process.env.REACT_APP_LOCALHOST}/api/shops/products`)
      .get(`http://localhost:5000/api/shops/products`)
      .then((res) => finalShopFilter(res.data));
  };

  return (
    <div className="AllOptionContainer">
      <div className="OptionContainer">
        <p>VILLE</p>
        <div className="Select">
          <Select
            styles={customStyles}
            value={selectedCity}
            onChange={handleChange}
            options={options}
            width="333px"
          />
        </div>
      </div>
      <div className="OptionContainer">
        <p>TYPE D&apos;ENSEIGNE</p>
        <div className="Container1">
          <div
            role="button"
            tabIndex={0}
            name="online"
            className={[
              filterShopType.eshop ? 'Checked' : null,
              'OptionBox',
            ].join(' ')}
            onClick={() => onClickType('online')}
            onKeyDown={() => {}}
          >
            En ligne
          </div>
          <div
            role="button"
            tabIndex={0}
            name="offline"
            className={[
              filterShopType.realshop ? 'Checked' : null,
              'OptionBox',
            ].join(' ')}
            onClick={() => onClickType('offline')}
            onKeyDown={() => {}}
          >
            Physique
          </div>
        </div>
      </div>
      <div className="OptionContainer">
        <p>DESTINATAIRE</p>
        <div className="Container1">
          <div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="woman"
              className={[
                filterRecipient.femme ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickRecipient('femme')}
            >
              Femme
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="man"
              className={[
                filterRecipient.homme ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickRecipient('homme')}
            >
              Homme
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="couple"
              className={[
                filterRecipient.couple ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickRecipient('couple')}
            >
              Couple
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="famille"
              className={[
                filterRecipient.famille ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickRecipient('famille')}
            >
              Famille
            </div>
          </div>
          <div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="baby"
              className={[
                filterRecipient.bébé ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickRecipient('bébé')}
            >
              Bébé
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="animal de compagnie"
              className={[
                filterRecipient['animal de compagnie'] ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickRecipient('Animal de compagnie')}
            >
              Animal de compagnie
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="child"
              className={[
                filterRecipient.enfant ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickRecipient('enfant')}
            >
              Enfant
            </div>
          </div>
        </div>
      </div>
      <div className="OptionContainer">
        <p>THEMATIQUE</p>
        <div className="Container1">
          <div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="trend"
              className={[
                filterTheme.mode ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('mode')}
            >
              Mode
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="house"
              className={[
                filterTheme.maison ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('maison')}
            >
              Maison
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="food"
              className={[
                filterTheme.gastronomie ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('gastronomie')}
            >
              Gastronomie
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="culture"
              className={[
                filterTheme.culture ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('culture')}
            >
              Culture
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="adult"
              className={[
                filterTheme.adulte ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('adulte')}
            >
              Adulte
            </div>
          </div>
          <div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="health"
              className={[
                filterTheme['bien-être'] ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('bien-être')}
            >
              Bien-être
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="sport"
              className={[
                filterTheme.sport ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('sport')}
            >
              Sport
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="evasion"
              className={[
                filterTheme.evasion ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('evasion')}
            >
              Evasion
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="education"
              className={[
                filterTheme.education ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('education')}
            >
              Education
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              name="other"
              className={[
                filterTheme['magasins specialises'] ? 'Checked' : null,
                'OptionBox',
              ].join(' ')}
              onClick={() => onClickTheme('magasins specialises')}
            >
              Spécialisé
            </div>
            <div>
              <Button
                onClick={filter}
                variant="contained"
                color="primary"
                className={classes.root}
              >
                Je filtre !
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FilterShopContainer.propTypes = {
  filterShopByTheme: PropTypes.func,
  filterShopByType: PropTypes.func,
  filterShopByRecipient: PropTypes.func,
  filterShopType: PropTypes.shape({
    eshop: PropTypes.bool,
    realshop: PropTypes.bool,
    filteredArray: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
  }),
  filterRecipient: PropTypes.shape({
    femme: PropTypes.bool,
    homme: PropTypes.bool,
    bébé: PropTypes.bool,
    'animal de compagnie': PropTypes.bool,
    couple: PropTypes.bool,
    enfant: PropTypes.bool,
    famille: PropTypes.bool,
    filteredArray: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
  }),
  filterTheme: PropTypes.shape({
    mode: PropTypes.bool,
    maison: PropTypes.bool,
    gastronomie: PropTypes.bool,
    culture: PropTypes.bool,
    adulte: PropTypes.bool,
    'bien-être': PropTypes.bool,
    sport: PropTypes.bool,
    evasion: PropTypes.bool,
    education: PropTypes.bool,
    'magasins specialises': PropTypes.bool,
    filteredArray: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
  }),
  finalShopFilter: PropTypes.func,
};

FilterShopContainer.defaultProps = {
  filterShopByTheme: '',
  filterShopByType: '',
  filterShopByRecipient: '',
  filterShopType: [],
  filterRecipient: [],
  filterTheme: [],
  finalShopFilter: [],
};

const mapStateToProps = (state) => {
  return {
    filterShopType: state.shop.filterShopType,
    filterRecipient: state.shop.filterRecipient,
    filterTheme: state.shop.filterTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterShopByType: (type, data) =>
      dispatch(actionCreators.filterShopByType(type, data)),
    filterShopByTheme: (theme, data) =>
      dispatch(actionCreators.filterShopByTheme(theme, data)),
    filterShopByRecipient: (recipient, data) =>
      dispatch(actionCreators.filterShopByRecipient(recipient, data)),
    finalShopFilter: (data) => dispatch(actionCreators.finalShopFilter(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterShopContainer);
