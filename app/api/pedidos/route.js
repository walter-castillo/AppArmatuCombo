import { NextResponse } from "next/server"


let SelectedCombo = {
  name: null,
  base: null,
  ingredients: [],
  drinks: [],
  totalPrice: 0,
  totalCal: 0,
}

export async function GET(){
    try {
        const selectedCombo = await SelectedCombo;
        return NextResponse.json(selectedCombo, { status: 200 });
    } catch (error) {
        return NextResponse.json({error:"Error en el servidor"}, {status: 500})
    }
}
