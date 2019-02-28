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
