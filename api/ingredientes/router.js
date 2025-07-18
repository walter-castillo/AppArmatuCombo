// import { connectDB } from "@/lib/mongodb"
// import Producto from "@/models/Producto"
// import { NextResponse } from "next/server"


// let productos = [ {id:1, nombre:"Notebook", precio:4000}, {id:2, nombre: "Teclado 60H", precio:250}]

// //Get: enviar informacion al frontend
// export async function GET(){
//     await connectDB()
//     try {
//         const productos = await Producto.find()
//         return NextResponse.json(productos, {status:200})
//     } catch (error) {
//         return NextResponse.json({error:"Error en el servidor"}, {status: 500})
//     }
// }


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