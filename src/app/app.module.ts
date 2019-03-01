import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { SearchResultsComponent } from "./components/search-results/search-results.component";
import { FoodResultComponent } from "./components/food-result/food-result.component";
import { FoodListComponent } from "./components/food-list/food-list.component";
import { FoodDetailComponent } from "./components/food-detail/food-detail.component";
import { reducer } from "./store/reducer";

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchResultsComponent,
    FoodResultComponent,
    FoodListComponent,
    FoodDetailComponent
  ],
  imports: [BrowserModule, StoreModule.forRoot(reducer), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
