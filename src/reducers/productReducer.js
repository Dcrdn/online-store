import {INCREMENT_HATS,INCREMENT_TSHIRTS,INCREMENT_PANTS,INCREMENT_TOTALHATS,INCREMENT_TOTALPANTS,INCREMENT_TOTALTSHIRTS,TOTAL} from '../actions/types';
  const initialState = {
    countPants: 0,
    countTshirts: 0,
    countHats: 0,
    totalPants:0,
    totalTshirts:0,
    totalHats:0,
    precios:0
  };
  
function reducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT_PANTS:
        return {
          ...state, countPants: state.countPants +1
        };
      case INCREMENT_TSHIRTS:
        return {
          ...state,countTshirts: state.countTshirts +1
        };
      case INCREMENT_HATS:
        return {
          ...state,countHats: state.countHats +1
        };
      case INCREMENT_TOTALPANTS:
        return{ 
          ...state, totalPants:action.payload
        };
      case INCREMENT_TOTALTSHIRTS:
        return{ 
          ...state, totalTshirts:action.payload
        };
      case INCREMENT_TOTALHATS:
        return{ 
          ...state, totalHats:action.payload
        };
      case TOTAL:
        return{ 
          ...state, precios:action.payload
        };
      default:
        return state;      
    }
  }

  export default reducer;