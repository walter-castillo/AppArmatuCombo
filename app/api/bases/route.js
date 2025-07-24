// import Producto from "@/models/Producto"
import { NextResponse } from "next/server"


let Bases= [
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
    ]

export async function GET(){
      console.log('desde get bases');
    try {
        const bases = await Bases
        return NextResponse.json(bases, {status:200})
    } catch (error) {
        return NextResponse.json({error:"Error en el servidor"}, {status: 500})
    }
}

  
