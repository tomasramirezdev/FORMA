import { getProductsFromSheet } from '@/lib/google-sheets'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const products = await getProductsFromSheet()
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        )
    }
}
