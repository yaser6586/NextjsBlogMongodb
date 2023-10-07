import { NextResponse } from "next/server";

import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:3000/api/posts").then((res) =>
//     res.json()
//   );

//   return posts.map((post) => ({
//     id: post._id,
//   }));
// }
export async function GET(request, { params }) {
  //

  const client = await clientPromise;
  const db = client.db("blog");
  const post = await db
    .collection("posts")
    .find({ _id: new ObjectId(params.id) })
    .toArray();
  return NextResponse.json(post);
}
