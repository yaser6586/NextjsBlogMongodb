import Post from "./component/Post";

export async function getPost() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const PostData = res.json();

  return PostData;
}

export default async function Home() {
  //for access to json json file we should use async await
  const posts = await getPost();
  return (
    <>
      <div>
        {posts.map((post) => (
          <Post posts={post} />
        ))}
      </div>
    </>
  );
}
