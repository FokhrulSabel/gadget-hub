import dbConnect from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await dbConnect();

    const { id } = await params;

    const product = await Product.findById(id).lean();

    if (!product) {
      return NextResponse.json(
        { ok: false, error: "Product not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ ok: true, data: product });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 },
    );
  }
}
