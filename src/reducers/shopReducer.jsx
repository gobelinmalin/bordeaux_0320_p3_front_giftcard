import * as actionTypes from '../actions/actionTypes';

const initialState = {
  filterShopType: { online: false, offline: false, filteredArray: [] },
  filterRecipient: {
    femme: false,
    homme: false,
    bébé: false,
    'animal de compagnie': false,
    couple: false,
    enfant: false,
    famille: false,
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

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_FINAL_ARRAYSHOP: {
      const { finalArray } = action;
      return {
        ...state,
        finalArray,
      };
    }
    case actionTypes.FILTER_BY_TYPESHOP: {
      const type = action.type2;
      let newTypeArray = action.dataType;
      let trueOrFalse = true;
      if (state.filterShopType[type]) {
        trueOrFalse = false;
        newTypeArray = [];
      }
      let vide = false;
      if (newTypeArray.length === 0) {
        vide = true;
      }
      return {
        ...state,
        filterShopType: {
          ...state.filterShopType,
          online: false,
          offline: false,
          [type]: trueOrFalse,
          filteredArray: newTypeArray,
          arrayvide: vide,
        },
      };
    }
    case actionTypes.FILTER_BY_THEMESHOP: {
      const { theme } = action;
      let { dataTheme } = action;
      let trueOrFalse = true;
      if (state.filterTheme[theme]) {
        dataTheme = [];
        trueOrFalse = false;
      }
      let vide = false;
      if (dataTheme.length === 0) {
        vide = true;
      }
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
          [theme]: trueOrFalse,
          filteredArray: dataTheme,
          arrayvide: vide,
        },
      };
    }
    case actionTypes.FILTER_BY_RECIPIENTSHOP: {
      const { recipient } = action;
      let { dataRecipient } = action;
      let trueOrFalse = true;
      if (state.filterRecipient[recipient]) {
        dataRecipient = [];
        trueOrFalse = false;
      }
      let vide = false;
      if (dataRecipient.length === 0) {
        vide = true;
      }
      return {
        ...state,
        filterRecipient: {
          ...state.filterRecipient,
          femme: false,
          homme: false,
          bébé: false,
          'animal de compagnie': false,
          couple: false,
          enfant: false,
          famille: false,
          [recipient]: trueOrFalse,
          filteredArray: dataRecipient,
          arrayvide: vide,
        },
      };
    }
    case actionTypes.FINAL_FILTERSHOP: {
      const arrayType = state.filterShopType.filteredArray;
      const arrayRecipient = state.filterRecipient.filteredArray;
      const arrayTheme = state.filterTheme.filteredArray;
      const baseArray = action.data;
      let finalFilteredArray = [];

      // when nobody touch the filter
      if (
        arrayType.length === 0 &&
        arrayRecipient.length === 0 &&
        arrayTheme.length === 0
      ) {
        finalFilteredArray = baseArray;
      } else if (
        state.filterTheme.arrayvide === true ||
        state.filterRecipient.arrayvide === true ||
        state.filterShopType.arrayvide === true
      ) {
        finalFilteredArray = [];
      }

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
