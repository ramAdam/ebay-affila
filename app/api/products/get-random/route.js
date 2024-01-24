import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";
import { generateFakeProducts, generateRandomProduct } from "@/app/utils/helper";

export async function GET() {
    try {
        // const productsCount = await prisma.products.count();
        const productsCount = generateFakeProducts().length;
        const skip = Math.floor(Math.random() * productsCount);
        // const products = await prisma.products.findMany({
        //     take: 5,
        //     skip: skip,
        //     orderBy: { id: 'asc' },
        // })
        const products = generateFakeProducts().slice(skip, skip + productsCount);
        // await prisma.$disconnect();
        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        // await prisma.$disconnect();
        return new NextResponse('Something went wrong', { status: 400 });
    }
}