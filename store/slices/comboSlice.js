import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  bases: [
    {
      id: 1,
      name: "Single",
      price: 1000,
      cal: 400,
      image: "./bases/simple.png",
    },
    {
      id: 2,
      name: "Double Patty",
      price: 1400,
      cal: 700,
      image: "./bases/doble.png",
    },
    {
      id: 3,
      name: "Vegan",
      price: 1200,
      cal: 350,
      image: "./bases/simple.png",
    },
    {
      id: 4,
      name: "Chicken",
      price: 1300,
      cal: 500,
      image: "./bases/pollo.png",
    },
  ],
  ingredients: [
    {
      id: 1,
      name: "Queso",
      price: 200,
      cal: 100,
      image: "./ingredients/queso.jpg",
    },
    {
      id: 2,
      name: "Bacon",
      price: 300,
      cal: 150,
      image: "./ingredients/bacon.jpg",
    },
    {
      id: 3,
      name: "Lechuga",
      price: 100,
      cal: 20,
      image: "./ingredients/lechuga.jpg",
    },
    {
      id: 4,
      name: "Tomate",
      price: 100,
      cal: 30,
      image: "./ingredients/tomate.jpg",
    },
    {
      id: 7,
      name: "Huevo",
      price: 250,
      cal: 90,
      image: "./ingredients/huevo.jpg",
    },
  ],
  drinks: [
    {
      id: 1,
      name: "Coca-Cola",
      price: 500,
      cal: 200,
      image: "./drinks/coca.jpg",
    },
    { id: 2, name: "Agua", price: 300, cal: 0, image: "./drinks/agua.jpg" },
    {
      id: 3,
      name: "Sprite",
      price: 500,
      cal: 180,
      image: "./drinks/sprite.jpg",
    },
  ],
  // selectedCombo: {
  //   base: null,
  //   ingredients: [],
  //   drink: null,
  //   totalPrice: 0,
  //   totalCal: 0,
  // },
  selectedCombo: {
    base: "Hamburguesa doble",
    ingredients: ["Queso", "Lechuga", "Tomate"],
    drink: "Coca-Cola",
    papas: "Papas clásicas",
  },
};

const comboSlice = createSlice({
  name: "combo",
  initialState,
  reducers: {

  seleccionarBase:(state, action)=>{
    state
  },
}
})
/* 
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
} = comboSlice.actions; */

export const {seleccionarBase}=comboSlice.actions;

export default comboSlice.reducer;
