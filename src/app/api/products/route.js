import dbConnect from "../../../lib/db";
import Product from "../../../models/Product";

export async function GET(req) {
  try {
    await dbConnect();

    const products = await Product.find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .lean();

    return new Response(JSON.stringify({ ok: true, data: products }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/products error:", err);

    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    await dbConnect();

    const product = await Product.create({
      ...body,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ ok: true, data: product }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/products error:", err);

    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
    });
  }
}


