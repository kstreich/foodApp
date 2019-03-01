import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Food } from "../models/food";
import { SearchResult } from "../models/search-result";

// True while fetching data from API
export const LOADING = "Food Load";

//Searching Food via Food Search API
export const SEARCH = "Food Search";
export const SEARCH_DONE = "Food Search Done";

//Fetching Food Details via Food Report Api
export const FETCH_FOOD = "Fetch Food";
export const FETCH_FOOD_DONE = "Fetch Food Done";

//Adding food to my food list
export const ADD_FOOD = "Add Food";

//getting food details from my-food list
export const GET_FOOD = "Get Food";

// Removing food to the my-food-list
export const REMOVE_FOOD = "Remove Food";

//creates the actual actions by defining their payload
export class Search implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) {}
}

export class SearchDone implements Action {
  readonly type = SEARCH_DONE;
  constructor(public payload: SearchResult[]) {}
}

export class FetchFood implements Action {
  readonly type = FETCH_FOOD;
  constructor(public payload: SearchResult[]) {}
}

export class FetchFoodDone implements Action {
  readonly type = FETCH_FOOD_DONE;
  constructor(public payload: Food) {}
}

export class AddFood implements Action {
  readonly type = ADD_FOOD;
  constructor() {}
}

export class GetFood implements Action {
  readonly type = GET_FOOD;
  constructor(public payload: string) {}
}

export class RemoveFood implements Action {
  readonly type = REMOVE_FOOD;
  constructor(public payload: Food) {}
}

//exports the actions to user them inside the reducers functions
export type Actions =
  | Search
  | SearchDone
  | AddFood
  | RemoveFood
  | FetchFood
  | FetchFoodDone
  | GetFood;
