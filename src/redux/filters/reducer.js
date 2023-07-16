import { statusFilters } from "../constants";
import { FILTER_ACTIONS } from "./actions";

const filtersInitialState = {
    status: statusFilters.all,
}


export const filtersReducer = (state = filtersInitialState, action) => {
   if(action.type === FILTER_ACTIONS.update) {
          return {
            ...state,
            status: action.payload,
          };
      }else{
        return state;
      }
    // switch (action.type) {
    //   case "filters/updateFilter":
    //     return {
    //       ...state,
    //       status: action.payload,
    //     };
    //   default:
    //     return state;
    // }
  };