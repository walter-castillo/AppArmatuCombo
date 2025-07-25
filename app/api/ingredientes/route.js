import { NextResponse } from "next/server"
let Ingredients = [
  {
    id: 1,
    name: "Queso",
    price: 200,
    cal: 100,
    image: "./ingredients/queso.png",
  },
  {
    id: 2,
    name: "Bacon",
    price: 300,
    cal: 150,
    image: "./ingredients/bacon.png",
  },
  {
    id: 3,
    name: "Lechuga",
    price: 100,
    cal: 20,
    image: "./ingredients/lechuga.png",
  },
  {
    id: 4,
    name: "Tomate",
    price: 100,
    cal: 30,
    image: "./ingredients/tomate.png",
  },
  {
    id: 5,
    name: "Huevo",
    price: 250,
    cal: 90,
    image: "./ingredients/huevo.png",
  },
]

export async function GET(){
    try {
        const ingredients = await Ingredients;
        return NextResponse.json(ingredients, { status: 200 });
    } catch (error) {
        return NextResponse.json({error:"Error en el servidor"}, {status: 500})
    }
}

