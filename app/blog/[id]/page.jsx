export async function generateStaticParams() {
  const posts = await fetch("http://localhost:3000/api/posts").then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    id: post.id,
  }));
}

export async function getPost(id) {
  const res = await fetch("http://localhost:3000/api/posts/" + id, {
    next: { revalidate: 0 },
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
      <p className="text-center bg-zinc-300  mx-44 p-10">{pt.body}</p>
    </div>
  );
}

export default PostDetail;
