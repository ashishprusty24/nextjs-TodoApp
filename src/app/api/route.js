import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function POST(req, res) {
  const { title, description } = await req.json();

  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo created " }, { status: 201 });
}

export async function GET() {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos });
}

export async function DELETE(request) {
  //http://localhost:3000/api?id=123
  console.log(request.nextUrl.searchParams.get("id"));
  const id = request.nextUrl.searchParams.get("id");
  await TodoModel.findByIdAndDelete(id);

  return NextResponse.json({ msg: "Todo deleted" }, { status: 200 });
}

export async function PUT(request) {
  //http://localhost:3000/api?id=123
  console.log(request.nextUrl.searchParams.get("id"));
  const id = request.nextUrl.searchParams.get("id");
  await TodoModel.findByIdAndUpdate(id, {
    $set: {
      isComplete: true,
    },
  });

  return NextResponse.json({ msg: "Todo updated" }, { status: 200 });
}
