import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  bases: [
    {
      id: 1,
      name: "Single",
      price: 1000,
      cal: 400,
      image: "/bases/simple.png",
    },
    {
      id: 2,
      name: "Double Patty",
      price: 1400,
      cal: 700,
      image: "/bases/doble.png",
    },
    {
      id: 3,
      name: "Vegan",
      price: 1200,
      cal: 350,
      image: "/bases/simple.png",
    },
    {
      id: 4,
      name: "Chicken",
      price: 1300,
      cal: 500,
      image: "/bases/pollo.png",
    },
  ],
  ingredients: [
    {
      id: 1,
      name: "Queso",
      price: 200,
      cal: 100,
      image: "/ingredients/queso.png",
    },
    {
      id: 2,
      name: "Bacon",
      price: 300,
      cal: 150,
      image: "/ingredients/bacon.png",
    },
    {
      id: 3,
      name: "Lechuga",
      price: 100,
      cal: 20,
      image: "/ingredients/lechuga.png",
    },
    {
      id: 4,
      name: "Tomate",
      price: 100,
      cal: 30,
      image: "/ingredients/tomate.png",
    },
    {
      id: 5,
      name: "Huevo",
      price: 250,
      cal: 90,
      image: "/ingredients/huevo.png",
    },
  ],
  drinks: [
    {
      id: 1,
      name: "Coca-Cola",
      price: 500,
      cal: 200,
      image: "/drinks/coca.png",
    },
    { id: 2, name: "Agua", price: 300, cal: 0, image: "/drinks/agua.png" },
    {
      id: 3,
      name: "Sprite",
      price: 500,
      cal: 180,
      image: "/drinks/sprite.png",
    },
  ],
  selectedCombo: {
    name: null,
    base: null,
    ingredients: [],
    drinks: [],
    totalPrice: 0,
    totalCal: 0,
  },
};

const comboSlice = createSlice({
  name: "combo",
  initialState,
  reducers: {
    seleccionarBase: (state, action) => {
      state.selectedCombo.base = action.payload;
      state.selectedCombo.totalPrice = action.payload.price;
      state.selectedCombo.totalCal = action.payload.cal;
    },

    ingresarNombre: (state, action) => {
      state.selectedCombo.name = action.payload;
    },

    seleccionarIngredientes: (state, action) => {
      const {
        id: idFront,
        name: nameFront,
        price: priceFront,
        cal: calFront,
      } = action.payload;

      const ingredients = state.selectedCombo.ingredients;

      const ingredienteExistente = ingredients.find((item) => item.id === idFront );

      if (ingredienteExistente) {
        ingredienteExistente.cant += 1;
      } else {
        ingredients.push({
          id: idFront,
          name: nameFront,
          price: priceFront,
          cal: calFront,
          cant: 1,
        });
      }
      state.selectedCombo.totalPrice += priceFront;
      state.selectedCombo.totalCal += calFront;
    },

    restarIngredientes: (state, action) => {
      const index = state.selectedCombo.ingredients.findIndex(ing=> ing.id === action.payload.id)
      if (index !== -1) {
        if (state.selectedCombo.ingredients[index].cant<=1) {
          state.selectedCombo.ingredients.splice(index, 1);
        }  else{
          state.selectedCombo.ingredients[index].cant-=1
        }  
      }
      state.selectedCombo.totalPrice -= action.payload.price;
      state.selectedCombo.totalCal -= action.payload.cal;

    },

    seleccionarDrinks: (state, action) => {
      const {
        id: idFront,
        name: nameFront,
        price: priceFront,
        cal: calFront,
      } = action.payload;

      const drinks = state.selectedCombo.drinks;

      const drinkExistente = drinks.find(
        (item) => item.id === idFront
      );

      if (drinkExistente) {
        drinkExistente.cant += 1;
      } else {
        drinks.push({
          id: idFront,
          name: nameFront,
          price: priceFront,
          cal: calFront,
          cant: 1,
        });
      }
      state.selectedCombo.totalPrice += priceFront;
      state.selectedCombo.totalCal += calFront;
    },

    restarBebidas: (state, action) => {
      const index = state.selectedCombo.drinks.findIndex(dri=> dri.id === action.payload.id);
      if (index !== -1) {
        if (state.selectedCombo.drinks[index].cant<=1) {
          state.selectedCombo.drinks.splice(index, 1);
        }  else{
          state.selectedCombo.drinks[index].cant-=1
        }  
      }
      state.selectedCombo.totalPrice -= action.payload.price;
      state.selectedCombo.totalCal -= action.payload.cal;
    },

    LimpiarSelectedCombo: (state) => {
      state.selectedCombo = {
        name: null,
        base: null,
        ingredients: [],
        drinks: [],
        totalPrice: 0,
        totalCal: 0,
      };
    },
  },
});

export const {
  seleccionarBase,
  ingresarNombre,
  seleccionarIngredientes,
  seleccionarDrinks,
  restarIngredientes,
  restarBebidas,
  LimpiarSelectedCombo,
} = comboSlice.actions;

export default comboSlice.reducer;
