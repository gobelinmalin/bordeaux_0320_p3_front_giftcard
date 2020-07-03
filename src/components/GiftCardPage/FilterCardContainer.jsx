import React, { useState } from 'react';
import { connect } from 'react-redux';
import './FilterCardContainer.css';
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

const FilterCardContainer = (props) => {
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
    filterCardType,
    filterRecipient,
    filterTheme,
    finalFilter,
    filterByType,
    filterByTheme,
    filterByRecipient,
  } = props;

  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (city) => {
    setSelectedCity(city);
  };

  const onClickTheme = (theme) => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/products?theme=${theme}`)
      .then((res) => filterByTheme(theme, res.data));
  };

  const onClickRecipient = (recipient) => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/products?tag=${recipient}`)
      .then((res) => filterByRecipient(recipient, res.data));
  };

  const onClickType = (type) => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/products/${type}`)
      .then((res) => filterByType(type, res.data));
  };

  const filter = () => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/products`)
      .then((res) => finalFilter(res.data));
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
        <p>TYPE DE CARTE</p>
        <div className="Container1">
          <div
            role="button"
            tabIndex={0}
            name="eCard"
            className={[
              filterCardType.eCard ? 'Checked' : null,
              'OptionBox',
            ].join(' ')}
            onClick={() => onClickType('eCard')}
            onKeyDown={() => {}}
          >
            E-carte
          </div>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
            name="realCard"
            className={[
              filterCardType.realCard ? 'Checked' : null,
              'OptionBox',
            ].join(' ')}
            onClick={() => onClickType('realCard')}
          >
            Carte physique
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

FilterCardContainer.propTypes = {
  filterByTheme: PropTypes.func,
  filterByType: PropTypes.func,
  filterByRecipient: PropTypes.func,
  filterCardType: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  filterRecipient: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  filterTheme: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  finalFilter: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};

FilterCardContainer.defaultProps = {
  filterByTheme: '',
  filterByType: '',
  filterByRecipient: '',
  filterCardType: '',
  filterRecipient: '',
  filterTheme: '',
  finalFilter: '',
};

const mapStateToProps = (state) => {
  return {
    filterCardType: state.product.filterCardType,
    filterRecipient: state.product.filterRecipient,
    filterTheme: state.product.filterTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterByType: (type, data) =>
      dispatch(actionCreators.filterByType(type, data)),
    filterByTheme: (theme, data) =>
      dispatch(actionCreators.filterByTheme(theme, data)),
    filterByRecipient: (recipient, data) =>
      dispatch(actionCreators.filterByRecipient(recipient, data)),
    finalFilter: (data) => dispatch(actionCreators.finalFilter(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterCardContainer);
