import { NextResponse } from "next/server";

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request) {
  // return NextResponse.json(data);
  const client = await clientPromise;
  const db = client.db("blog");
  const allPosts = await db.collection("posts").find({}).toArray();
  return NextResponse.json(allPosts);
}
export async function POST(request) {
  const client = await clientPromise;
  const db = client.db("blog");
  const { title, body } = await request.json();
  const newPost = {
    title: title,
    body: body,
  };
  let myPost = await db.collection("posts").insertOne(newPost);

  return NextResponse.json(myPost);
}
// export async function DELETE(request) {
//   const { id } = await request.json();

//   const client = await clientPromise;
//   const db = client.db("blog");
//   const delPosts = await db
//     .collection("posts")
//     .deleteOne({ _id: new ObjectId(id) });
//   return NextResponse.json(id);
// }