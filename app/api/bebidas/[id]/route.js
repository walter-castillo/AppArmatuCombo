import { NextResponse } from "next/server"


let Drinks = [
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
];


 
export async function GET(_,{params}) {
  const { id } = await params;
  try{
    const drink = await Drinks.find((p) => p.id === parseInt(id));

    if (!drink) {
      return NextResponse.json(
        { error: "Bebida no encontrada" },
        { status: 404 }
      );
    }
    return NextResponse.json( drink,{ status: 200 } );
  }catch{
    return NextResponse.json({error:"Error en el servidor"}, {status: 500})
  }
  
}
