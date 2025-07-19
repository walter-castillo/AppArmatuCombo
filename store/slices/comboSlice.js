import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bases: [
    { id: 1, name: "Single", price: 1000, cal: 400 },
    { id: 2, name: "Double Patty", price: 1400, cal: 700 },
    { id: 3, name: "Vegan", price: 1200, cal: 350 },
    { id: 4, name: "Chicken", price: 1300, cal: 500 },
  ],
  ingredients: [
    { id: 1, name: "Cheese", price: 200, cal: 100 },
    { id: 2, name: "Bacon", price: 300, cal: 150 },
    { id: 3, name: "Lettuce", price: 100, cal: 20 },
    { id: 4, name: "Tomato", price: 100, cal: 30 },
    { id: 5, name: "Pickles", price: 100, cal: 10 },
    { id: 6, name: "Onion", price: 100, cal: 15 },
    { id: 7, name: "Egg", price: 250, cal: 90 },
  ],
  drinks: [
    { id: 1, name: "Coca-Cola", price: 500, cal: 200 },
    { id: 2, name: "Water", price: 300, cal: 0 },
    { id: 3, name: "Sprite", price: 500, cal: 180 },
    { id: 4, name: "Fanta", price: 500, cal: 190 },
    { id: 5, name: "Iced Tea", price: 550, cal: 120 },
  ],
  selectedCombo: {
    base: null,
    ingredients: [],
    drink: null,
    totalPrice: 0,
    totalCal: 0,
  },
};

const comboSlice = createSlice({
  name: "combo",
  initialState,
  reducers: {
    selectBase: (state, action) => {
      state.selectedCombo.base = action.payload;
      comboSlice.caseReducers.recalculateTotals(state);
    },
    toggleIngredient: (state, action) => {
      const id = action.payload.id;
      const exists = state.selectedCombo.ingredients.find((i) => i.id === id);
      if (exists) {
        state.selectedCombo.ingredients = state.selectedCombo.ingredients.filter(
          (i) => i.id !== id
        );
      } else {
        state.selectedCombo.ingredients.push(action.payload);
      }
      comboSlice.caseReducers.recalculateTotals(state);
    },
    selectDrink: (state, action) => {
      state.selectedCombo.drink = action.payload;
      comboSlice.caseReducers.recalculateTotals(state);
    },
    clearCombo: (state) => {
      state.selectedCombo = {
        base: null,
        ingredients: [],
        drink: null,
        totalPrice: 0,
        totalCal: 0,
      };
    },
    recalculateTotals: (state) => {
      let total = 0;
      let cal = 0;

      if (state.selectedCombo.base) {
        total += state.selectedCombo.base.price;
        cal += state.selectedCombo.base.cal;
      }
      state.selectedCombo.ingredients.forEach((i) => {
        total += i.price;
        cal += i.cal;
      });
      if (state.selectedCombo.drink) {
        total += state.selectedCombo.drink.price;
        cal += state.selectedCombo.drink.cal;
      }

      state.selectedCombo.totalPrice = total;
      state.selectedCombo.totalCal = cal;
    },
  },
});

export const {
  selectBase,
  toggleIngredient,
  selectDrink,
  clearCombo,
} = comboSlice.actions;

export default comboSlice.reducer;
