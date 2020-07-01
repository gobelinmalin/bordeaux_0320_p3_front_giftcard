import * as actionTypes from '../actions/actionTypes';

const initialState = {
  allCards: [],
  filterCardType: {
    eCard: false,
    realCard: false,
    filteredArray: [],
  },
  filterRecipient: {
    femme: false,
    homme: false,
    bébé: false,
    animaux: false,
    couple: false,
    enfant: false,
    filteredArray: [],
  },
  filterTheme: {
    mode: false,
    maison: false,
    gastronomie: false,
    culture: false,
    adulte: false,
    'bien-être': false,
    sport: false,
    evasion: false,
    education: false,
    'magasins specialises': false,
    filteredArray: [],
  },
  finalArray: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS: {
      const product = action.products;
      const listProducts = action.products;
      const month = new Date();
      const months = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ];
      const actualMonth = months[month.getMonth()];
      const newProducts = listProducts.filter((element) =>
        element.creationDate.includes(actualMonth)
      );

      return {
        ...state,
        product,
        newProducts,
      };
    }
    case actionTypes.FILTER_BY_TYPE: {
      const type = action.type2;
      const newTypeArray = action.dataType;
      return {
        ...state,
        filterCardType: {
          ...state.filterCardType,
          eCard: false,
          realCard: false,
          [type]: true,
          filteredArray: newTypeArray,
        },
      };
    }
    case actionTypes.FILTER_BY_THEME: {
      const { theme, dataTheme } = action;
      return {
        ...state,
        filterTheme: {
          ...state.filterTheme,
          mode: false,
          maison: false,
          gastronomie: false,
          culture: false,
          adulte: false,
          'bien-être': false,
          sport: false,
          evasion: false,
          education: false,
          'magasins specialises': false,
          [theme]: true,
          filteredArray: dataTheme,
        },
      };
    }
    case actionTypes.FILTER_BY_RECIPIENT: {
      const { recipient, dataRecipient } = action;
      return {
        ...state,
        filterRecipient: {
          ...state.filterRecipient,
          femme: false,
          homme: false,
          bébé: false,
          animaux: false,
          couple: false,
          enfant: false,
          [recipient]: true,
          filteredArray: dataRecipient,
        },
      };
    }
    case actionTypes.FINAL_FILTER: {
      const arrayType = state.filterCardType.filteredArray;
      const arrayRecipient = state.filterRecipient.filteredArray;
      const arrayTheme = state.filterTheme.filteredArray;

      const finalFilteredArray = [];

      // Filter if only array1 is not empty
      if (
        arrayType.length > 0 &&
        arrayRecipient.length === 0 &&
        arrayTheme.length === 0
      ) {
        arrayType.map((element) => finalFilteredArray.push(element));
      }
      // Filter if Only array2 is not empty
      if (
        arrayType.length === 0 &&
        arrayRecipient.length > 0 &&
        arrayTheme.length === 0
      ) {
        arrayRecipient.map((element) => finalFilteredArray.push(element));
      }
      // Filter if only array3 is empty
      if (
        arrayType.length === 0 &&
        arrayRecipient.length === 0 &&
        arrayTheme.length > 0
      ) {
        arrayTheme.map((element) => finalFilteredArray.push(element));
      }
      // Filter if array1 & array 2 are not empty
      if (
        arrayType.length > 0 &&
        arrayRecipient.length > 0 &&
        arrayTheme.length === 0
      ) {
        arrayType.forEach((element) => {
          arrayRecipient.forEach((element2) => {
            if (element2.id === element.id) {
              finalFilteredArray.push(element);
            }
          });
        });
      }
      // Filter if array1 & array3 are not empty
      if (
        arrayType.length > 0 &&
        arrayRecipient.length === 0 &&
        arrayTheme.length > 0
      ) {
        arrayType.forEach((element) => {
          arrayTheme.forEach((element2) => {
            if (element2.id === element.id) {
              finalFilteredArray.push(element);
            }
          });
        });
      }
      // Filter if array2 & array3 are not empty
      if (
        arrayType.length === 0 &&
        arrayRecipient.length > 0 &&
        arrayTheme.length > 0
      ) {
        arrayRecipient.forEach((element) => {
          arrayTheme.forEach((element2) => {
            if (element2.id === element.id) {
              finalFilteredArray.push(element);
            }
          });
        });
      }

      // Filter if all array are not empty
      if (
        arrayType.length > 0 &&
        arrayRecipient.length > 0 &&
        arrayTheme.length > 0
      ) {
        const transitionArray = [];
        arrayType.forEach((element) => {
          arrayRecipient.forEach((element2) => {
            if (element2.id === element.id) {
              transitionArray.push(element);
            }
          });
        });
        transitionArray.forEach((element) => {
          arrayTheme.forEach((element2) => {
            if (element2.id === element.id) {
              finalFilteredArray.push(element);
            }
          });
        });
      }
      return {
        ...state,
        finalArray: finalFilteredArray,
      };
    }
    default:
      return state;
  }
}
