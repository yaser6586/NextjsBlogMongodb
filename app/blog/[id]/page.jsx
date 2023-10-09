import DeletePost from "@/app/component/DeletePost";
import Link from "next/link";
import { API_URL } from "@/config/config";
// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:3000/api/posts").then((res) =>
//     res.json()
//   );

//   return posts.map((post) => ({
//     id: post.id,
//   }));
// }

export async function getPost(id) {
  const res = await fetch(`${API_URL}/api/posts/` + id, {
    cache: "no-store",
  });
  const post = res.json();
  return post;
}

async function PostDetail({ params }) {
  const posts = await getPost(params.id);
  // we only want object that is in array so we choose first item of array
  const pt = posts[0];

  return (
    <div>
      <h2 className="text-center h-28 my-14 text-4xl	rounded-md w-1/2 mx-auto">
        {pt.title}
      </h2>
      <p className="text-center bg-zinc-300  mx-10 p-10">{pt.body}</p>
      <div className="text-center my-10">
        <DeletePost postId={pt._id} />{" "}
        <Link href={`/blog/edit/${params.id}`}>
          <button className="btn btn-primary">edit</button>
        </Link>
      </div>
    </div>
  );
}

export default PostDetail;
