export const selectBases = (state) => state.combo2.bases;
export const selectIngredients = (state) => state.combo2.ingredients;
export const selectDrinks = (state) => state.combo2.drinks;

export const selectSelectedCombo = (state) => state.combo2.selectedCombo;
export const selectSelectedBase = (state) => state.combo2.selectedCombo.base;
export const selectSelectedIngredients = (state) => state.combo2.selectedCombo.ingredients;
export const selectSelectedDrink = (state) => state.combo2.selectedCombo.drink;

export const selectTotalPrice = (state) => state.combo2.selectedCombo.totalPrice;
export const selectTotalCal = (state) => state.combo2.selectedCombo.totalCal;
