/** @format */

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams;
  const slug = search.get("slug"); //honda-brio-2019
  const qParams = slug ? "?slug=" + slug : "";

  //slug => dynamic route(route params)
  //dynamic mengarah kesebuah key
  // id = id , token = token, slug

  const res = await fetch("http://localhost:2000/products" + qParams);
  const data = await res.json();

  if (data.length) {
    return Response.json(
      {
        message: "success",
        data: data.length == 1 ? data[0] : data,
      },
      {
        status: 200,
      }
    );
  }
  return Response.json(
    {
      message: "product not found",
    },
    {
      status: 404,
    }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  await fetch("http://localhost:2000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const getAll = await fetch("http://localhost:2000/products");
  const data = await getAll.json();

  return Response.json({
    message: "hello",
    data,
  });
}

export function DELETE(req: NextRequest) {
  return Response.json({
    message: "deleted",
  });
}

export function PATCH(req: NextRequest) {
  return Response.json({
    message: "updated with patch",
  });
}
export function PUT(req: NextRequest) {
  return Response.json({
    message: "updated with put",
  });
}
