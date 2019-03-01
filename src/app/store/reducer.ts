import { Food } from "../models/food";
import { SearchResult } from "../models/search-result";

import * as FoodActions from "./actions";

//reducers simply takes the action and then returns the new state according to the action type and the payload

export interface State {
  loading: boolean;
  searchTerms: string;
  results: SearchResult[];
  selectedFood: Food;
  foodList: Food[];
}

//initial starting point for the state, because we dont have any data
const initialState: State = {
  loading: false,
  searchTerms: "",
  results: [],
  selectedFood: null,
  foodList: []
};

//once the state is defined and initialized, we can then create our reducer function
// ... is the spread operator
export function reducer(
  state = initialState,
  action: FoodActions.Actions
): State {
  switch (action.type) {
    case FoodActions.SEARCH: {
      return {
        ...state,
        loading: true,
        searchTerms: action.payload
      };
    }
    case FoodActions.SEARCH_DONE: {
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    }
    case FoodActions.FETCH_FOOD: {
      return {
        ...state,
        loading: true
      };
    }
    case FoodActions.FETCH_FOOD_DONE: {
      return {
        ...state,
        loading: false,
        selectedFood: action.payload
      };
    }
    case FoodActions.ADD_FOOD: {
      return {
        ...state,
        foodList: [...state.foodList, state.selectedFood]
      };
    }
    case FoodActions.GET_FOOD: {
      return {
        ...state,
        selectedFood: state.foodList[action.payload]
      };
    }
    case FoodActions.REMOVE_FOOD: {
      return {
        ...state,
        foodList: state.foodList.filter(food => food.id !== action.payload.id)
      };
    }
    default: {
      return state;
    }
  }
}
