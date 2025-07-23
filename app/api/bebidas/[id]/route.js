// import Producto from "@/models/Producto"
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

// //POST crear nuevo producto
// export async function POST(req){
//      await connectDB()
//     try {
//          //en la req viene el objeto que me envio el front
//          const body = await req.json()
//          const {nombre, precio} = body
         
//          if(!nombre || !precio){
//             return NextResponse.json({error:"Nombre o precio no existen"}, {status:400})
//          }

//         await Producto.create({nombre,precio})
         
//          return NextResponse.json({msg:"creado exitosamente"}, {status:201})
        
//     } catch (error) {
//         return NextResponse.json({error: "Error en el servidor, comunicarse con un administrador"},{status:500})
//     }

// }



// export async function PUT(req){

//     try {
//          const {id,nombre,precio} = await req.json()

//         const index = productos.findIndex(p => p.id === id)

//         if( index === -1 ){
//             return NextResponse.json({error: "Producto no encontrado"}, {status:404})
//         }

    
//         productos[index] = {id,nombre,precio}

//         return NextResponse.json({ok: "producto actualizado correctamente"} ,{status:200})

//     } catch (error) {
//          return NextResponse.json({error: "Error en el servidor, comunicarse con un administrador"},{status:500})
//     }

// }

                            
// export async function DELETE(_,{params}){
//     await connectDB()
//     const { id } = params

//    try {
//     const eliminado = await Producto.findByIdAndDelete(id)

//     if(!eliminado){
//         return NextResponse.json({error:"producto no encontrado"}, {status:404})
//     }

//     return NextResponse.json({ok:"producto Eliminado"}, {status:200})

//    } catch (error) {
//      return NextResponse.json({error: "Error en el servidor, comunicarse con un administrador"},{status:500})
//    }
// }