import { NextResponse } from "next/server"

let Drinks= [
  {
    id: 1,
    name: "Coca-Cola",
    price: 500,
    cal: 200,
    image: "./drinks/coca.png",
  },
  { id: 2, name: "Agua", price: 300, cal: 0, image: "./drinks/agua.png" },
  {
    id: 3,
    name: "Sprite",
    price: 500,
    cal: 180,
    image: "./drinks/sprite.png",
  },
]

export async function GET(){
    try {
        const drinks = await Drinks
        return NextResponse.json(drinks, {status:200})
    } catch (error) {
        return NextResponse.json({error:"Error en el servidor"}, {status: 500})
    }
}