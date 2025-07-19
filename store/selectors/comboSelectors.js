export const selectBases = (state) => state.combo.bases;
export const selectIngredients = (state) => state.combo.ingredients;
export const selectDrinks = (state) => state.combo.drinks;

export const selectSelectedCombo = (state) => state.combo.selectedCombo;
export const selectSelectedBase = (state) => state.combo.selectedCombo.base;
export const selectSelectedIngredients = (state) => state.combo.selectedCombo.ingredients;
export const selectSelectedDrink = (state) => state.combo.selectedCombo.drink;

export const selectTotalPrice = (state) => state.combo.selectedCombo.totalPrice;
export const selectTotalCal = (state) => state.combo.selectedCombo.totalCal;
