import { NextResponse } from "next/server";
import { generateFakeProducts } from "@/app/utils/helper";

export async function GET() {
    try {
        const products = generateFakeProducts();
        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        return new NextResponse('Something went wrong', { status: 400 });
    }
}


