import dbConnect from "../../../lib/db";
import Product from "../../../models/Product";

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 8;
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    // search query
    const query = search
      ? {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { brand: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    // total products
    const total = await Product.countDocuments(query);

    // fetch paginated products
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const totalPages = Math.ceil(total / limit);

    return new Response(
      JSON.stringify({
        ok: true,
        data: products,
        pagination: {
          total,
          page,
          limit,
          totalPages,
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("GET /api/products error:", err);

    return new Response(
      JSON.stringify({
        ok: false,
        error: err.message,
      }),
      { status: 500 },
    );
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
